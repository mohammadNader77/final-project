import {Injectable} from '@angular/core';
import {delay, Observable, of, tap} from 'rxjs';
import {User} from '../models/user';
import {Employee} from "../models/employee";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      employee: {
        id: 1,
        name: 'John Doe',
        imageUrl: 'user.png',
      },
      submittedBy: 'Admin',
      fromDate: '2024-08-01',
      category: 'Unpaid Time Off',
      toDate: '2024-08-01 12:15 AM',
      status: 'Approved',
    },
    {
      employee: {
        id: 2,
        name: 'ahmed',
        imageUrl: 'user.png',
      },
      submittedBy: 'Admin',
      fromDate: '2024-08-01',
      category: 'Unpaid Time Off',
      toDate: '2024-08-01 12:15 AM',
      status: 'Approved',
    },
  ];


  private EMPLOYEES: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      imageUrl: 'user.png',
    },
    {
      id: 2,
      name: 'ahmed',
      imageUrl: 'user.png',
    },

    {
      id: 3,
      name: '3',
      imageUrl: 'user.png',
    },

    {
      id: 4,
      name: '4',
      imageUrl: 'user.png',
    },

    {
      id: 5,
      name: '5',
      imageUrl: 'user.png',
    },

    {
      id: 6,
      name: '6',
      imageUrl: 'user.png',
    },

  ];

  private MAX_TIME = 1000;

  getUsers(): Observable<Employee[]> {
    return of(this.EMPLOYEES).pipe(
      delay(Math.random() * this.MAX_TIME),
      tap((data) => data)
    );
  }
  getTimeOffs(): Observable<User[]> {
    return of(this.users).pipe(
      delay(Math.random() * this.MAX_TIME),
      tap((data) => data)
    );
  }

  addUser(user: User): Observable<User[]> {
    return of(this.users).pipe(
      delay(Math.random() * this.MAX_TIME),
      tap(() => {
        this.users.push(user);
      }),
      tap(() => {
        console.log('New user added:', user);
      })
    );
  }
}
