import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './logout-page.component.html',
  styleUrl: './logout-page.component.scss',
})
export class LogoutPageComponent {
  email: string = '';
  password: string = '';

  constructor(
    private readonly authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      window.location.reload();
    }
  }

  login() {
    console.log('logininnn');
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
