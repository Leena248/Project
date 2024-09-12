import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';

  constructor(
    private readonly authService: AuthenticationService,
    private router: Router
  ) {}

  login() {
    this.authService.loginUser(this.email, this.password).subscribe({
      next: (response: any) => {
        const token = response.token;
        localStorage.setItem('token', token);
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      },
    });
  }
}
