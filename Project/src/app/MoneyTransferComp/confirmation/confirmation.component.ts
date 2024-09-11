import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  // recipientName!: string;
  // recipientAccount!: string;
  // senderName: string = 'John Doe';
  // senderAccount: string = 'xxxx7890';

  @Input() recipientName!: string;
  @Input() recipientAccount!: string;
  @Input() senderAccount!: string;
  @Input() senderName!: string;

  @Output() makeTransferEvent: EventEmitter<any> = new EventEmitter();

  makeTransfer() {
    this.makeTransferEvent.emit();
  }

  constructor(private router: Router) {}

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
