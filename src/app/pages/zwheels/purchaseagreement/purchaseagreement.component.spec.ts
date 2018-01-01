import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseagreementComponent } from './purchaseagreement.component';

describe('PurchaseagreementComponent', () => {
  let component: PurchaseagreementComponent;
  let fixture: ComponentFixture<PurchaseagreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseagreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseagreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
