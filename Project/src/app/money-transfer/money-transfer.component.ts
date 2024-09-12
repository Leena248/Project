import { Component } from '@angular/core';
import { AmountComponent } from '../MoneyTransferComp/amount/amount.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MobileSectionComponent } from '../components/mobile-section/mobile-section.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ConfirmationComponent } from '../MoneyTransferComp/confirmation/confirmation.component';
import { MoneyTransferIntroSectionComponent } from '../MoneyTransferComp/money-transfer-intro-section/money-transfer-intro-section.component';
import { SuccessComponent } from '../MoneyTransferComp/success/success.component';
import { CustomerService } from '../services/customer.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-money-transfer',
  standalone: true,
  imports: [
    AmountComponent,
    SuccessComponent,
    NavbarComponent,
    MobileSectionComponent,
    FooterComponent,
    ConfirmationComponent,
    MoneyTransferIntroSectionComponent,
  ],
  templateUrl: './money-transfer.component.html',
  styleUrl: './money-transfer.component.scss',
})
export class MoneyTransferComponent {
  constructor(
    private readonly customerService: CustomerService,
    private readonly accountTransfer: AccountService
  ) {}

  state: string = 'amount';
  amount!: number;
  recipientName!: string;
  recipientAccount!: string;
  senderAccount!: string;
  senderName!: string;

  ngOnInit() {
    this.customerService.getUserInfo().subscribe({
      next: (response: any) => {
        console.log('info:', response);
        this.senderAccount = response.accounts[0].accountNumber;
        this.senderName = response.name;
      },
    });
  }
  makeTransfer(any: any) {
    console.log('MAKE TRANSFER');
    this.accountTransfer
      .makeTransfer(
        this.amount,
        this.recipientName,
        this.recipientAccount,
        this.senderAccount
      )
      .subscribe({
        next: (response: any) => {
          console.log('IS SUCCEEDED');
          this.changeState('success');
        },
      });
  }
  changeState(value: string) {
    this.state = value;
  }
  changeAmount(value: number) {
    this.amount = value;
  }
  changeRecipientName(value: string) {
    this.recipientName = value;
  }
  changeRecipientAccount(value: string) {
    this.recipientAccount = value;
  }
  changeAll(
    state: string,
    amount: number,
    recipientName: string,
    recipientAccount: string
  ) {
    this.changeState(state);
    this.changeAmount(amount);
    this.changeRecipientName(recipientName);
    this.changeRecipientAccount(recipientAccount);
  }
}
