import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { NgFor } from '@angular/common';
import { CustomerService } from '../../services/customer.service';
@Component({
  selector: 'app-payments-history',
  standalone: true,
  imports: [NgFor],
  templateUrl: './payments-history.component.html',
  styleUrl: './payments-history.component.scss',
})
export class PaymentsHistoryComponent {
  accountNumber: number = 678549876543;
  recipientName: string = 'Johnathon Smith';
  totalPrice: number = 1000;
  transactions: any;

  constructor(
    private readonly customerService: CustomerService,
    private readonly accountService: AccountService
  ) {}
  ngOnInit() {
    // let accountNummber: any;
    this.customerService.getUserInfo().subscribe({
      next: (response: any) => {
        console.log('info:', response);
        const accountNummber = response.accounts[0].accountNumber;
        console.log('an:', accountNummber);

        this.accountService.getTransactions(accountNummber).subscribe({
          next: (response: any) => {
            console.log('response:', response);
            this.transactions = response.transactionsForAccount;
          },
          // (error) => {console.error('Error:', error)}
        });
      },
    });

    // const response = {
    //   transactionsForAccount: [
    //     {
    //       id: 0,
    //       senderName: 'string',
    //       senderAccountNumber: 'string',
    //       currency: 'EGP',
    //       recieverAccountNumber: 'string',
    //       recieverAccountName: 'string',
    //       amountTransferred: 0,
    //       createdAt: '2024-09-11T19:09:05.449Z',
    //     },
    //     {
    //       id: 0,
    //       senderName: 'string',
    //       senderAccountNumber: 'string',
    //       currency: 'EGP',
    //       recieverAccountNumber: 'string',
    //       recieverAccountName: 'string',
    //       amountTransferred: 0,
    //       createdAt: '2024-09-11T19:09:05.449Z',
    //     },
    //   ],
    //   pageNumber: 0,
    //   pageSize: 0,
    //   totalElement: 0,
    //   totalPages: 0,
    //   isLast: true,
    // };
    // this.transactions = response.transactionsForAccount;
    console.log(this.transactions);
  }
}
