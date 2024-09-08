import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MobileSectionComponent } from '../components/mobile-section/mobile-section.component';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, MobileSectionComponent],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss',
})
export class MyAccountComponent {
  constructor() {}
}
