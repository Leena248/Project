import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss',
})
export class RegistrationPageComponent {
  constructor(
    private readonly authService: AuthenticationService,
    private router: Router
  ) {}
  fullName: string = '';
  email: string = '';
  country: string = '';
  day: string = '';
  month: string = '';
  year: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    this.register();
  }

  register() {
    const dateOfBirth = `${this.year}-${this.month}-${this.day}`;
    this.authService
      .registerNewCustomer(
        this.fullName,
        this.email,
        this.password,
        this.country,
        dateOfBirth,
        ''
      )
      .subscribe({
        next: (response: any) => {
          this.router.navigate(['/login']).then(() => {
            window.location.reload();
          });
        },
      });
  }
}
// this.regster() {
//   console.log()
//   // this.authService.registerNewCustomers().subscribe({
//   //   next: (response: any) => {
//   //     );
//   //   },
//   // });
// }
