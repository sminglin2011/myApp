import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZInputComponent } from './z-input.component';

describe('ZInputComponent', () => {
  let component: ZInputComponent;
  let fixture: ComponentFixture<ZInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
