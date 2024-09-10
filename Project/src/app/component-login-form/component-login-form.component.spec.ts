import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLoginFormComponent } from './component-login-form.component';

describe('ComponentLoginFormComponent', () => {
  let component: ComponentLoginFormComponent;
  let fixture: ComponentFixture<ComponentLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLoginFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
