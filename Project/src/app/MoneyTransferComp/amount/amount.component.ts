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
  amount!: number;
  recipientName!: string;
  recipientAccount!: string;
  @Output() newStateEvent: EventEmitter<string> = new EventEmitter<string>();

  changeNewState(value: string) {
    this.newStateEvent.emit(value);
  }

  constructor(private router: Router) {}

  onSubmit() {
    // this.router.navigate(['/confirmation'], {
    //   state: {
    //     amount: this.amount,
    //     recipientName: this.recipientName,
    //     recipientAccount: this.recipientAccount,
    //   },
    // });
  }
}
