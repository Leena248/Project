import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss',
})
export class MyProfileComponent {
  name: string = 'Jonathon Smith';
  email: String = 'jhonathonsmith&#64;gmail.com';
  phone: number = +880125412624;
  gender: string = 'Male';

  constructor() {}
  // onInit(){
  //   fetch()
  // }

  // fetch{
  //   APP_ID.get()
  //   .subscribe(data){
  //     this.name = data[0]['accountName']
  //   }
  // }
}
