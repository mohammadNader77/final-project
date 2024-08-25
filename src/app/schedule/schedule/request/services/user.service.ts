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
      id: 1,
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
      id: 2,
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
    {
      id: 3,
      employee: {
        id: 3,
        name: 'ahmed',
        imageUrl: 'user.png',
      },
      submittedBy: 'Admin',
      fromDate: '2024-08-01',
      category: 'Unpaid Time Off',
      toDate: '2024-08-01 12:15 AM',
      status: 'Approved',
    },
    {
      id: 4,
      employee: {
        id: 4,
        name: 'ahmed',
        imageUrl: 'user.png',
      },
      submittedBy: 'Admin',
      fromDate: '2024-08-01',
      category: 'Unpaid Time Off',
      toDate: '2024-08-01 12:15 AM',
      status: 'Approved',
    },
    {
      id: 5,
      employee: {
        id: 5,
        name: 'ahmed',
        imageUrl: 'user.png',
      },
      submittedBy: 'Admin',
      fromDate: '2024-08-01',
      category: 'Unpaid Time Off',
      toDate: '2024-08-01 12:15 AM',
      status: 'Approved',
    },
    {
      id: 6,
      employee: {
        id: 6,
        name: 'ahmed',
        imageUrl: 'user.png',
      },
      submittedBy: 'Admin',
      fromDate: '2024-08-01',
      category: 'Unpaid Time Off',
      toDate: '2024-08-01 12:15 AM',
      status: 'Approved',
    },
    {
      id: 7,
      employee: {
        id: 7,
        name: 'osama',
        imageUrl: 'user.png',
      },
      submittedBy: 'Admin',
      fromDate: '2024-08-01',
      category: 'Unpaid Time Off',
      toDate: '2024-08-01 12:15 AM',
      status: 'Approved',
    },
    {
      id: 8,
      employee: {
        id: 8,
        name: 'nor',
        imageUrl: 'user.png',
      },
      submittedBy: 'Admin',
      fromDate: '2024-08-01',
      category: 'Unpaid Time Off',
      toDate: '2024-08-01 12:15 AM',
      status: 'Approved',
    },
    {
      id: 9,
      employee: {
        id: 9,
        name: 'mohammad',
        imageUrl: 'user.png',
      },
      submittedBy: 'Admin',
      fromDate: '2024-08-01',
      category: 'Unpaid Time Off',
      toDate: '2024-08-01 12:15 AM',
      status: 'Approved',
    },
    {
      id: 10,
      employee: {
        id: 10,
        name: 'ahmed',
        imageUrl: 'user.png',
      },
      submittedBy: 'Admin',
      fromDate: '2024-08-01',
      category: 'Unpaid Time Off',
      toDate: '2024-08-01 12:15 AM',
      status: 'Approved',
    },
    {
      id: 11,
      employee: {
        id: 11,
        name: 'yazan',
        imageUrl: 'user.png',
      },
      submittedBy: 'Admin',
      fromDate: '2024-08-01',
      category: 'Unpaid Time Off',
      toDate: '2024-08-01 12:15 AM',
      status: 'Approved',
    },
    {
      id: 12,
      employee: {
        id: 12,
        name: 'ahmed',
        imageUrl: 'user.png',
      },
      submittedBy: 'Admin',
      fromDate: '2024-08-01',
      category: 'Unpaid Time Off',
      toDate: '2024-08-01 12:15 AM',
      status: 'Approved',
    },
    {
      id: 13,
      employee: {
        id: 13,
        name: 'ahmed',
        imageUrl: 'user.png',
      },
      submittedBy: 'Admin',
      fromDate: '2024-08-01',
      category: 'Unpaid Time Off',
      toDate: '2024-08-01 12:15 AM',
      status: 'Approved',
    },
    {
      id: 14,
      employee: {
        id: 14,
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
        user.id = this.users.length+5;
        this.users.push(user);
      }),
      tap(() => {
        console.log('New user added:', user);
      })
    );
  }
  getUserById(id: number): Observable<User | undefined> {
    return of(this.users.find(user => user.employee.id === id)).pipe(
      delay(Math.random() * this.MAX_TIME),
      tap((data) => console.log('Fetched user:', data))
    );
  }

  updateUser(updatedUser: User): Observable<User[]> {
    return of(this.users).pipe(
      delay(Math.random() * this.MAX_TIME),
      tap(() => {
        const index = this.users.findIndex(user => user.employee.id === updatedUser.employee.id);
        if (index !== -1) {
          this.users[index] = updatedUser;
        }
      }),
      tap(() => {
        console.log('User updated:', updatedUser);
      })
    );
  }
}
