import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl =
    'https://money-transfer-service.onrender.com/api/v1/customer';
  private token: string | null;
  getHeaders() {
    return { headers: { Authorization: `bearer ${this.token}` } };
  }
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  getUserInfo() {
    return this.http.get(`${this.apiUrl}/info`, this.getHeaders());
  }
  getTransactions(accountNummber: string) {
    return this.http.get(
      `https://money-transfer-service.onrender.com/api/v1/account/${accountNummber}/transactions`,
      this.getHeaders()
    );
  }
  updateUserInfo(
    name: string,
    email: string,
    country: string,
    dateOfBirth: string,
    phone: string
  ) {
    const body = {
      fullName: name,
      email: email,
      country: country,
      dateOfBirth: dateOfBirth,
      phoneNumber: phone,
    };
    return this.http.put(`${this.apiUrl}/edit`, body, this.getHeaders());
  }
}
