import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'https://money-transfer-service.onrender.com/api/v1/auth';
  private token: string | null;
  getHeaders() {
    return { headers: { Authorization: `bearer ${this.token}` } };
  }
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }
  changePassword(oldPassword: string, newPassword: string) {
    const body = {
      newPassword,
      oldPassword,
    };
    return this.http.put(
      `${this.apiUrl}/change-password`,
      body,
      this.getHeaders()
    );
  }
  registerNewCustomer(
    name: string,
    email: string,
    password: string,
    country: string,
    dateOfBirth: string,
    phoneNumber: string
  ) {
    const body = {
      name,
      email,
      password,
      country,
      dateOfBirth,
      phoneNumber,
    };
    return this.http.post(`${this.apiUrl}/register`, body);
  }
  logoutUser() {
    return this.http.post(`${this.apiUrl}/logout`, {}, this.getHeaders());
  }
  loginUser(email: string, password: string) {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/login`, body, this.getHeaders());
  }
}
