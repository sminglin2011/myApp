import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstaffInfoComponent } from './userstaff-info.component';

describe('UserstaffInfoComponent', () => {
  let component: UserstaffInfoComponent;
  let fixture: ComponentFixture<UserstaffInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserstaffInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstaffInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
