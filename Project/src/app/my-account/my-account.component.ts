import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import the necessary services
import { MobileSectionComponent } from '../components/mobile-section/mobile-section.component';
import { MyProfileComponent } from '../my-account-comps/my-profile/my-profile.component';
import { SettingsComponent } from '../my-account-comps/settings/settings.component';
import { PaymentsHistoryComponent } from '../my-account-comps/payments-history/payments-history.component';
import { ChangePasswordComponent } from '../my-account-comps/change-password/change-password.component';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [
    MyProfileComponent,
    SettingsComponent,
    PaymentsHistoryComponent,
    ChangePasswordComponent,
    MobileSectionComponent,
  ],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss',
})
export class MyAccountComponent implements OnInit {
  state: string = 'profile'; // Default state
  validStates: string[] = [
    'profile',
    'PaymentHistory',
    'Settings',
    'ChangePassword',
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Subscribe to query parameters to initialize the state
    this.route.queryParams.subscribe((params) => {
      const queryState = params['state'];

      // If the query parameter is valid, set the state; otherwise, default to 'profile'
      if (this.validStates.includes(queryState)) {
        this.state = queryState;
      } else {
        this.state = 'profile';
        this.updateQueryParam(null); // Update the URL to default 'profile'
      }
    });
  }

  // Method to change state and update query parameters
  changeState(newState: string) {
    if (this.validStates.includes(newState)) {
      this.state = newState;
      this.updateQueryParam(newState); // Update query parameter to reflect current state
    } else {
      this.state = 'profile';
      this.updateQueryParam('profile'); // Default to 'profile' if state is invalid
    }
  }

  // Helper method to update the query parameter in the URL
  private updateQueryParam(state: string | null) {
    if (state == null) {
      this.router.navigate([], {
        relativeTo: this.route,
      });
    } else {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { state },
        queryParamsHandling: 'merge', // Merge with other query parameters
      });
    }
  }
}
