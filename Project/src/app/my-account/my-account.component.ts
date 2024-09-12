import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
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
export class MyAccountComponent {
  constructor() {}

  state: string = 'profile';
  changeState(newState: string) {
    this.state = newState;
  }
}
