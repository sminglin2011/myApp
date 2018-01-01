import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaccountComponent } from './zaccount.component';

describe('ZaccountComponent', () => {
  let component: ZaccountComponent;
  let fixture: ComponentFixture<ZaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
