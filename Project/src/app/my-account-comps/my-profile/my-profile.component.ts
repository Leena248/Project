import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss',
})
export class MyProfileComponent {
  name!: String;
  email!: String;
  phone!: String;
  gender!: String;
  balance!: number;
  currency!: String;

  constructor(private readonly customerService: CustomerService) {}
  ngOnInit() {
    this.customerService.getUserInfo().subscribe({
      next: (response: any) => {
        this.name = response.name;
        this.email = response.email;
        this.phone = response.phoneNumber;
        this.gender = 'female';
        this.balance = response.accounts[0].balance;
        this.currency = response.accounts[0].currency;
      },
      // (error) => {console.error('Error:', error)}
    });
  }
}
