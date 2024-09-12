import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    MoneyTransferComponent,
    MyAccountComponent,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Project';
  constructor() {
    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsZWVuYUBnbWFpbC5jb20iLCJ1c2VyRW1haWwiOiJsZWVuYUBnbWFpbC5jb20iLCJpYXQiOjE3MjYwOTQxMzQsImV4cCI6MTcyNjA5NTkzNH0.RkxCt4D_gS-bVCDjWsgmMfXNXrauUKVBAwbbiHMSdDM'
      // 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsZWVuYUBnbWFpbC5jb20iLCJ1c2VyRW1haWwiOiJsZWVuYUBnbWFpbC5jb20iLCJpYXQiOjE3MjYwOTE5MDEsImV4cCI6MTcyNjA5MzcwMX0.mdiW-v8txUhB5iUDPx0RYZQM2nZaqoR9knWPU4BJKdU'
      // 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsZWVuYUBnbWFpbC5jb20iLCJ1c2VyRW1haWwiOiJsZWVuYUBnbWFpbC5jb20iLCJpYXQiOjE3MjYwODk5MDksImV4cCI6MTcyNjA5MTcwOX0.GzcBY97UhSyv5lbuo7lMJZ-XL_rUPaFwG_I-Ln1T0XQ'
      // 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsZWVuYUBnbWFpbC5jb20iLCJ1c2VyRW1haWwiOiJsZWVuYUBnbWFpbC5jb20iLCJpYXQiOjE3MjYwODk5MDksImV4cCI6MTcyNjA5MTcwOX0.GzcBY97UhSyv5lbuo7lMJZ-XL_rUPaFwG_I-Ln1T0XQ'
      // 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsZWVuYUBnbWFpbC5jb20iLCJ1c2VyRW1haWwiOiJsZWVuYUBnbWFpbC5jb20iLCJpYXQiOjE3MjYwODI1ODcsImV4cCI6MTcyNjA4NDM4N30.UsxvC9NJcB8Yt5XlV7F-MXjyalww8RK05P1IuMU9drQ'
      // 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsZWVuYUBnbWFpbC5jb20iLCJ1c2VyRW1haWwiOiJsZWVuYUBnbWFpbC5jb20iLCJpYXQiOjE3MjYwNjQyODgsImV4cCI6MTcyNjA2NjA4OH0._4bJ0zTcoFWa9rfUktxLPliAFVtSnfyUN516e5nlX-w'
      // 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsZWVuYUBnbWFpbC5jb20iLCJ1c2VyRW1haWwiOiJsZWVuYUBnbWFpbC5jb20iLCJpYXQiOjE3MjYwNjgxMTEsImV4cCI6MTcyNjA2OTkxMX0.JzZRbthtepeAz7LwoiDlzp25B_StSUqICZ8QiyOXk8U'
      // 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsZWVuYUBnbWFpbC5jb20iLCJ1c2VyRW1haWwiOiJsZWVuYUBnbWFpbC5jb20iLCJpYXQiOjE3MjYwODA2NTgsImV4cCI6MTcyNjA4MjQ1OH0.aTBlXl0dJ9HNYqj2QK2Sj0EFN0qAvZJJ9U2tuhQvuxc'
      // 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsZWVuYUBnbWFpbC5jb20iLCJ1c2VyRW1haWwiOiJsZWVuYUBnbWFpbC5jb20iLCJpYXQiOjE3MjYwODAxMDksImV4cCI6MTcyNjA4MTkwOX0.2jPFP3hurqjmA5YwBaRdJgEHnr8zdCUvklIkjZMJr8Y'
    );
  }
}
