import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
})
export class ConfirmationComponent {
  amount!: number;
  recipientName!: string;
  recipientAccount!: string;
  senderName: string = 'John Doe';
  senderAccount: string = 'xxxx7890';

  constructor(private router: Router) {}

  ngOnInit() {
    const state = history.state;
    this.amount = state.amount;
    this.recipientName = state.recipientName;
    this.recipientAccount = state.recipientAccount;
  }

  onConfirm() {
    this.router.navigate(['/payment'], {
      state: {
        amount: this.amount,
        recipientName: this.recipientName,
        recipientAccount: this.recipientAccount,
      },
    });
  }

  onBack() {
    this.router.navigate(['/amount']);
  }
}
