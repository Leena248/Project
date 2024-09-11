import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'https://money-transfer-service.onrender.com/api/v1/account';
  private token: string | null;
  getHeaders() {
    return { headers: { Authorization: `bearer ${this.token}` } };
  }
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }
  getTransactions(accountNummber: string) {
    return this.http.get(
      `${this.apiUrl}/${accountNummber}/transactions`,
      this.getHeaders()
    );
  }
  makeTransfer(
    amount: number,
    recipientName: string,
    recipientAccount: string,
    senderAccount: string
  ) {
    const body = {
      senderAccountNumber: senderAccount,
      recipientAccountNumber: recipientAccount,
      amount: amount,
      recipientName: recipientName,
    };
    return this.http.put(`${this.apiUrl}/transfer`, body, this.getHeaders());
  }
}
