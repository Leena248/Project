import { Component } from '@angular/core';
import { AmountComponent } from '../MoneyTransferComp/amount/amount.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MobileSectionComponent } from '../components/mobile-section/mobile-section.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ConfirmationComponent } from '../MoneyTransferComp/confirmation/confirmation.component';

@Component({
  selector: 'app-money-transfer',
  standalone: true,
  imports: [
    AmountComponent,
    NavbarComponent,
    MobileSectionComponent,
    FooterComponent,
    ConfirmationComponent,
  ],
  templateUrl: './money-transfer.component.html',
  styleUrl: './money-transfer.component.scss',
})
export class MoneyTransferComponent {}
