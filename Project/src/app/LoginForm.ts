import { Component } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-some-parent-component',
  styleUrls: ['./some-parent.component.scss'],
  imports: [LoginFormComponent], // Add LoginFormComponent here
  template : `<app-login-form />`,
})
export class SomeParentComponent { }


