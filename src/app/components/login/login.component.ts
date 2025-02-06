import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService
      .login(this.username, this.password)
      .subscribe((response) => {
        if (response.success) {
          this.router.navigate(['/dashboard']);
        } else {
          alert('Login failed!');
        }
      });
  }
}
