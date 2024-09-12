import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// Get references to the login button and form
const loginButton = document.getElementById('Login_Form') as HTMLButtonElement;
const loginForm = document.getElementById('Login_Form') as HTMLDivElement;

// Function to open the login form
function openLoginForm() {
  if (loginForm) {
    loginForm.style.display = 'block';  // Show the login form
  }
}

// Add event listener to the login button
if (loginButton) {
  loginButton.addEventListener('click', openLoginForm);
}

