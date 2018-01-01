import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZwheelsComponent } from './zwheels.component';

describe('ZwheelsComponent', () => {
  let component: ZwheelsComponent;
  let fixture: ComponentFixture<ZwheelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZwheelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZwheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
