import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentModeFormComponent } from './payment-mode-form.component';

describe('PaymentModeFormComponent', () => {
  let component: PaymentModeFormComponent;
  let fixture: ComponentFixture<PaymentModeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentModeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentModeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
