import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class InactivityService {
  private timeout: any;
  private readonly inactivityTime = 2 * 60 * 1000; // 2 minutes
  // private readonly inactivityTime = 5 * 1000;

  constructor(private router: Router, private ngZone: NgZone) {
    this.startMonitoring();
  }

  startMonitoring() {
    this.resetTimer();

    window.addEventListener('mousemove', this.resetTimer.bind(this));
    window.addEventListener('keydown', this.resetTimer.bind(this));
  }

  resetTimer() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.logout(), this.inactivityTime);
  }

  logout() {
    console.log('Logged out due to inactivity');
    this.router.navigate(['/logout']);
  }
}
