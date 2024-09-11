import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-amount',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './amount.component.html',
  styleUrl: './amount.component.scss',
})
export class AmountComponent {
  state: string = 'confirmation';
  amount!: number;
  recipientName!: string;
  recipientAccount!: string;

  @Output() stateEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() amountEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() recipientNameEvent: EventEmitter<string> =
    new EventEmitter<string>();
  @Output() recipientAccountEvent: EventEmitter<string> =
    new EventEmitter<string>();

  changeStateEvent(value: string) {
    this.stateEvent.emit(value);
  }
  changeAmountEvent(value: number) {
    this.amountEvent.emit(value);
  }
  changeRecipientNameEvent(value: string) {
    this.recipientNameEvent.emit(value);
  }
  changeRecipientAccountEvent(value: string) {
    this.recipientAccountEvent.emit(value);
  }

  changeAll() {
    this.changeAmountEvent(this.amount);
    this.changeRecipientNameEvent(this.recipientName);
    this.changeRecipientAccountEvent(this.recipientAccount);
    this.changeStateEvent(this.state);
  }
  constructor(private router: Router) {}
  favorites() {}
  onSubmit() {}
}
