import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  name: string = 'Johnathon';
  country: string = 'UK';
  phone!: number;
  email!: string;
  onSubmit() {}
}
