import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

//////////////////////////////////////////////////////////////////////////////////////////////////

import { Component } from '@angular/core';
import { LoginFormComponent } from './path-to-login-form/login-form.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports:  [LoginFormComponent],
    templateUrl: './LoginForm.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {}



 templateUrl: './LoginForm.html'


 