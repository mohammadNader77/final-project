// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'final-angular';
//   isLoggedIn: boolean = false;
//   constructor() {}
//
//
//   onLoginSuccess() {
//     this.isLoggedIn = true;
//   }
// }
//
// // import {Component} from "@angular/core";
// //
// // @Component({
// //   selector: 'app-root',
// //   templateUrl: './app.component.html',
// //   styleUrl: './app.component.scss'
// // })
// // export class AppComponent {
// //   title = 'final-angular';
// // }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'final-angular';
  isLoggedIn: boolean = false;

  constructor(private router: Router) {
    // Redirect to login page if not logged in
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  onLoginSuccess() {
    this.isLoggedIn = true;
    this.router.navigate(['/dashboard']); // Navigate to dashboard after successful login
  }
}
