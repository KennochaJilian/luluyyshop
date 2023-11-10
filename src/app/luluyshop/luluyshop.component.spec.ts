import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuluyshopComponent } from './luluyshop.component';

describe('BioshopComponent', () => {
  let component: LuluyshopComponent;
  let fixture: ComponentFixture<LuluyshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuluyshopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuluyshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
