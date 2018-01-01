import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZsystemComponent } from './zsystem.component';

describe('ZsystemComponent', () => {
  let component: ZsystemComponent;
  let fixture: ComponentFixture<ZsystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZsystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
