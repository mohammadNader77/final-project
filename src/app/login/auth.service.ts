import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): boolean {
    if (email === 'user@example.com' && password === 'password' || email === 'mohammad@gmail.com' && password === 'mohammad') {
      localStorage.setItem('user', JSON.stringify({ email }));
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }
}
