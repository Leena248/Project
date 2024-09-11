import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss',
})
export class ChangePasswordComponent {
  constructor(private readonly authenticationService: AuthenticationService) {}
  newPassword: string = '';
  oldPassword: string = '';
  ngOnIt() {}
  onSubmit() {
    this.authenticationService
      .changePassword(this.oldPassword, this.newPassword)
      .subscribe({
        next: (response) => {
          console.log('response:', response);
        },
        // (error) => {console.error('Error:', error)}
      });
    console.log('new pass', this.newPassword);
  }
}
