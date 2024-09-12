import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  name!: string;
  balance!: number;
  currency!: string;
  constructor(private readonly customerService: CustomerService) {}
  ngOnInit() {
    this.customerService.getUserInfo().subscribe({
      next: (response: any) => {
        this.name = response.name;
        this.balance = response.accounts[0].balance;
        this.currency = response.accounts[0].currency;
      },
      // (error) => {console.error('Error:', error)}
    });
  }
  ButtonContent!: String;
  LoggedIn: Boolean = this.checkIsAuth();

  checkIsAuth() {
    return localStorage.getItem('token') != null;
  }

  ngAfterContentChecked() {
    if (!this.LoggedIn) {
      this.ButtonContent = 'Create an account';
    } else {
      this.ButtonContent = 'Transfer Now';
    }
  }
}
