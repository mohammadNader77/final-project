import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { Employee } from "../models/employee";

@Component({
  selector: 'app-add-time-off',
  templateUrl: './add-time-off.component.html',
  styleUrls: ['./add-time-off.component.scss']
})
export class AddTimeOffComponent implements OnInit {
  @Input() userToEdit: User | null = null;
  @Output() saveEdit = new EventEmitter<User>();

  timeOffForm: FormGroup = new FormGroup({});
  employees: Employee[] = [];
  selectedEmployee: Employee | null = null;
  isLoading = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('id');
      if (userId) {
        this.userService.getUserById(+userId).subscribe(user => {
          if (user) {
            this.userToEdit = user;
            this.populateForm(user);
          } else {
            console.error('User not found');
            this.router.navigate(['/schedule/request']);
          }
        });
      }
    });

    this.userService.getUsers().subscribe((employees: Employee[]) => {
      this.employees = employees;
    });

    this.timeOffForm = new FormGroup({
      employeeId: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      status: new FormControl('Pending', Validators.required),
      duration: new FormControl('', Validators.required),
      fromDate: new FormControl('', Validators.required),
      toDate: new FormControl('', Validators.required),
      comment: new FormControl(''),
    });

    this.timeOffForm.get('employeeId')?.valueChanges.subscribe((employeeId) => {
      this.selectedEmployee = this.employees.find(emp => emp.id === +employeeId) || null;
    });
  }

  populateForm(user: User): void {
    this.timeOffForm.patchValue({
      employeeId: user.employee.id,
      category: user.category,
      status: user.status,
      duration: 'Full day',
      fromDate: user.fromDate,
      toDate: user.toDate,
      comment: '',
    });
  }

  onSubmit(): void {
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;

      if (this.timeOffForm.valid) {
        const formValue = this.timeOffForm.value;
        const selectedEmployee = this.employees.find(emp => emp.id === +formValue.employeeId);

        if (selectedEmployee) {
          const updatedUser: User = {
            employee: selectedEmployee,
            submittedBy: selectedEmployee.name,
            fromDate: formValue.fromDate,
            category: formValue.category,
            toDate: formValue.toDate,
            status: formValue.status,
          };

          if (this.userToEdit) {
            this.userService.updateUser(updatedUser).subscribe(() => {
              this.saveEdit.emit(updatedUser);
              this.router.navigate(['/schedule/request']);
            });
          } else {
            this.userService.addUser(updatedUser).subscribe(() => {
              this.router.navigate(['/schedule/request']);
            });
          }
        }
      }

    // }, 1000);

  }

  onCancel(): void {
    this.router.navigate(['/schedule/request']);
  }
}
