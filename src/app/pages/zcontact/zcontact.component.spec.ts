import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZcontactComponent } from './zcontact.component';

describe('ZcontactComponent', () => {
  let component: ZcontactComponent;
  let fixture: ComponentFixture<ZcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
