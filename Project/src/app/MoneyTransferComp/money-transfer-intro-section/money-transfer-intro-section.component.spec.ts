import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyTransferIntroSectionComponent } from './money-transfer-intro-section.component';

describe('MoneyTransferIntroSectionComponent', () => {
  let component: MoneyTransferIntroSectionComponent;
  let fixture: ComponentFixture<MoneyTransferIntroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyTransferIntroSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyTransferIntroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
