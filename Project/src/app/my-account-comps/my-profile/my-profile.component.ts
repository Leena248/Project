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

  constructor(private readonly accountService: CustomerService) {}
  ngOnInit() {
    this.accountService.getUserInfo().subscribe({
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
    // const body = {
    //   id: 15,
    //   name: 'Leena Hesham',
    //   email: 'leena@gmail.com',
    //   dateOfBirth: '2005-08-24',
    //   country: 'Egypt',
    //   createdAt: '2024-09-11T12:24:42.460698',
    //   updatedAt: '2024-09-11T12:24:42.460743',
    //   phoneNumber: '01000123456',
    //   accounts: [
    //     {
    //       id: 10,
    //       accountNumber: '941024460',
    //       accountType: 'SAVINGS',
    //       balance: 0,
    //       currency: 'EGP',
    //       accountName: 'Leena Hesham',
    //       accountDescription: 'Savings Account',
    //       active: true,
    //       createdAt: '2024-09-11T12:24:42.469224',
    //       updatedAt: '2024-09-11T12:24:42.469243',
    //     },
    //   ],
    // };
  }

  // fetch{
  //   APP_ID.get()
  //   .subscribe(data){
  //     this.name = data[0]['accountName']
  //   }
  // }
}
