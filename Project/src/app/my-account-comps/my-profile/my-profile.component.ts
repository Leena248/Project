import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss',
})
export class MyProfileComponent {
  balance: number;
  user: any;

  constructor() {
    // Mock data for illustration
    this.balance = 10000;
    this.user = {
      firstName: 'Jonathon Smith',
      email: 'jhonathonsmith@gmail.com',
      phone: '+880125412624',
      gender: 'Male',
    };
  }

  ngOnInit(): void {}
}
