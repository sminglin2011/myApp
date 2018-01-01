import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstaffComponent } from './userstaff.component';

describe('UserstaffComponent', () => {
  let component: UserstaffComponent;
  let fixture: ComponentFixture<UserstaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserstaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
