import { Component } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-some-parent-component',
  templateUrl: './LoginForm.html',
  styleUrls: ['./some-parent.component.scss'],
  imports: [LoginFormComponent], // Add LoginFormComponent here
})
export class SomeParentComponent { }


