import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { MyAccountComponent } from './my-account/my-account.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'money-transfer', component: MoneyTransferComponent },
  { path: 'my-account', component: MyAccountComponent },

  // {path:  '', component: }
];
