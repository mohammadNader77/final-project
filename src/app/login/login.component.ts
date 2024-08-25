import {Component, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "./auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  @Output() loginSuccess = new EventEmitter<void>();


  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.authService.login(this.email, this.password)) {
      this.loginSuccess.emit();
      this.router.navigate(['/dashboard']);

    } else {
      alert('Invalid login credentials');
    }
  }
}
