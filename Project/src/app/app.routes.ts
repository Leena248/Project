import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'money-transfer', component: MoneyTransferComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'register', component: RegistrationPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'logout', component: LogoutPageComponent },
  { path: 'help', component: HelpPageComponent },
  // {path:  '', component: }
];
