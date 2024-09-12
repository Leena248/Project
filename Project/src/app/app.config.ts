import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { Component } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

//////////////////////////////////////////////////////////////////////////////////////////////////


@Component({
  selector: 'app-parent',
  standalone: true,
    templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.scss']
})
export class ParentComponent {}



 templateUrl: './LoginForm.html'


 