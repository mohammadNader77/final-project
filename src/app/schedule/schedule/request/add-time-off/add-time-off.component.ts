// //
// //
// // // src/app/add-time-off/add-time-off.component.ts
// // import {Component, OnInit} from "@angular/core";
// // import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// // import {UserService} from "../services/user.service";
// // import {Router} from "@angular/router";
// // import {User} from "../models/user";
// //
// // @Component({
// //   selector: 'app-add-time-off',
// //   templateUrl: './add-time-off.component.html',
// //   styleUrls: ['./add-time-off.component.scss']
// // })
// // export class AddTimeOffComponent implements OnInit {
// //   timeOffForm!: FormGroup;
// //
// //   constructor(
// //     private fb: FormBuilder,
// //     private userService: UserService,
// //     private router: Router
// //   ) {}
// //
// //   ngOnInit(): void {
// //     this.timeOffForm = this.fb.group({
// //       name: ['', Validators.required],
// //       submittedBy: ['', Validators.required],
// //       dateSubmitted: ['', Validators.required],
// //       category: ['', Validators.required],
// //       timeOfRequest: ['', Validators.required],
// //       status: ['', Validators.required],
// //     });
// //   }
// //
// //   onSubmit(): void {
// //     if (this.timeOffForm.valid) {
// //       const newUser: User = this.timeOffForm.value;
// //       this.userService.addUser(newUser);
// //       this.router.navigate(['/']);
// //     }
// //   }
// // }
// // src/app/schedule/add-time-off/add-time-off.component.ts
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import {UserService} from "../services/user.service";
//
// @Component({
//   selector: 'app-add-time-off',
//   templateUrl: './add-time-off.component.html',
//   styleUrls: ['./add-time-off.component.scss']
// })
// export class AddTimeOffComponent implements OnInit {
//   timeOffForm!: FormGroup;
//
//   constructor(
//     private fb: FormBuilder,
//     private userService: UserService,
//     private router: Router
//   ) {}
//
//   ngOnInit(): void {
//     this.timeOffForm = this.fb.group({
//       name: ['', Validators.required],
//       submittedBy: ['', Validators.required],
//       dateSubmitted: ['', Validators.required],
//       category: ['', Validators.required],
//       timeOfRequest: ['', Validators.required],
//       status: ['Pending', Validators.required]
//     });
//
//   }
//
//   onSubmit(): void {
//     if (this.timeOffForm.valid) {
//       const newUser = { id: Date.now(), ...this.timeOffForm.value };
//       this.userService.addUser(newUser);
//       this.router.navigate(['/schedule/request']);
//     }
//   }
//   onCancel(){
//     this.router.navigate(['/schedule/request'])
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-time-off',
  templateUrl: './add-time-off.component.html',
  styleUrls: ['./add-time-off.component.scss']
})
export class AddTimeOffComponent implements OnInit {
  timeOffForm: FormGroup = new FormGroup({});
  constructor(
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.timeOffForm = new FormGroup({
      name: new FormControl('', Validators.required),
      submittedBy: new FormControl('', Validators.required),
      dateSubmitted: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      timeOfRequest: new FormControl('', Validators.required),
      status: new FormControl('Pending', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.timeOffForm.valid) {
      const newUser = { id: Date.now(), ...this.timeOffForm.value };
      this.userService.addUser(newUser);
      this.router.navigate(['/schedule/request']);
    }
  }

  onCancel(): void {
    this.router.navigate(['/schedule/request']);
  }
}
