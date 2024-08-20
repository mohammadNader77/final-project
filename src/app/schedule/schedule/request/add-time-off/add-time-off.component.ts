import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import {Employee} from "../models/employee";

@Component({
  selector: 'app-add-time-off',
  templateUrl: './add-time-off.component.html',
  styleUrls: ['./add-time-off.component.scss']
})
export class AddTimeOffComponent implements OnInit {
  timeOffForm: FormGroup = new FormGroup({});
  employees: Employee[] = [];
  selectedEmployee: Employee | null = null;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: Employee[]) => {
      this.employees = users.map(user => user);
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

  onSubmit(): void {
    if (this.timeOffForm.valid) {
      const formValue = this.timeOffForm.value;

      const selectedEmployee = this.employees.find(emp => emp.id === +formValue.employeeId);

      if (selectedEmployee) {
        const newUser: User = {
          employee: selectedEmployee,
          submittedBy: selectedEmployee.name, // Assuming the employee name is the submitter
          fromDate: formValue.fromDate,
          category: formValue.category,
          toDate: formValue.toDate,
          status: formValue.status,
        };

        console.log('Form Data:', newUser);

        // Add the new user through the service
        this.userService.addUser(newUser).subscribe(() => {
          this.router.navigate(['/schedule/request']);
        });
      } else {
        console.error('Selected employee not found');
      }
    } else {
      console.error('Form is not valid');
    }
  }

  onCancel(): void {
    this.router.navigate(['/schedule/request']);
  }
}
