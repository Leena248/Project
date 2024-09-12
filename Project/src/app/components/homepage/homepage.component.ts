import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  ButtonContent!: String;
  LoggedIn: Boolean = true;
  ngAfterContentChecked() {
    if (!this.LoggedIn) {
      this.ButtonContent = 'Create an account';
    } else {
      this.ButtonContent = 'Transfer Now';
    }
  }
}
