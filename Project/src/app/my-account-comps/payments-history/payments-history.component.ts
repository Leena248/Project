import { Component } from '@angular/core';

@Component({
  selector: 'app-payments-history',
  standalone: true,
  imports: [],
  templateUrl: './payments-history.component.html',
  styleUrl: './payments-history.component.scss',
})
export class PaymentsHistoryComponent {
  accountNumber: number = 678549876543;
  recipientName: string = 'Johnathon Smith';
  totalPrice: number = 1000;
}
