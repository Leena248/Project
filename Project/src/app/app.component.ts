import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { FooterComponent } from './components/footer/footer.component';
import { InactivityService } from './services/inactivity.service';
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
  constructor(private inactivityService: InactivityService) {}
}
