// // src/app/services/user.service.ts
// import { Injectable } from '@angular/core';
// import {BehaviorSubject} from "rxjs";
// import {User} from "../models/user";
//
//
// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private usersSubject = new BehaviorSubject<User[]>([
//     {
//
//       name: 'John Doe',
//       imageUrl: 'user.png',
//       submittedBy: 'Admin',
//       dateSubmitted: '2024-08-01',
//       category: 'Unpaid Time Off',
//       timeOfRequest: '2024-08-01 12:15 AM',
//       status: 'Approved',
//     },
//     // Add more sample data if needed
//   ]);
//
//   users$ = this.usersSubject.asObservable();
//
//   addUser(user: User): void {
//     const currentUsers = this.usersSubject.getValue();
//     this.usersSubject.next([...currentUsers, user]);
//   }
// }
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      name: 'John Doe',
      imageUrl: 'user.png',
      submittedBy: 'Admin',
      dateSubmitted: '2024-08-01',
      category: 'Unpaid Time Off',
      timeOfRequest: '2024-08-01 12:15 AM',
      status: 'Approved',
    },

  ];

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.push(user);
  }
}

