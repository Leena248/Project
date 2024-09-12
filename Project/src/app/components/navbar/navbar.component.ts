import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  loggedIn: boolean = this.checkIsAuth();
  UserName!: string;

  checkIsAuth() {
    return localStorage.getItem('token') != null;
  }

  constructor(private readonly customerService: CustomerService) {}
  ngOnInit() {
    if (this.checkIsAuth()) {
      this.customerService.getUserInfo().subscribe({
        next: (response: any) => {
          this.UserName = response.name;
        },
      });
    }
  }
}
