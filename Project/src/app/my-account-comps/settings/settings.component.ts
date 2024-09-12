import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  constructor(private readonly customerService: CustomerService) {}
  name!: string;
  country!: string;
  phone!: string;
  email!: string;
  dateOfBirth!: string;

  onSubmit() {
    this.customerService
      .updateUserInfo(
        this.name,
        this.email,
        this.country,
        this.dateOfBirth,
        this.phone
      )
      .subscribe({
        next: (response) => {
          window.location.reload();
          console.log('response:', response);
        },
        // (error) => {console.error('Error:', error)}
      });
  }
  ngOnInit() {
    this.customerService.getUserInfo().subscribe({
      next: (response: any) => {
        this.name = response.name;
        this.country = response.country;
        this.dateOfBirth = response.dateOfBirth;
        this.email = response.email;
        this.phone = response.phoneNumber;
      },
      // (error) => {console.error('Error:', error)}
    });
  }
}
