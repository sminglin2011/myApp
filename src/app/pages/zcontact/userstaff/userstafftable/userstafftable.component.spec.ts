import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstafftableComponent } from './userstafftable.component';

describe('UserstafftableComponent', () => {
  let component: UserstafftableComponent;
  let fixture: ComponentFixture<UserstafftableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserstafftableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstafftableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
