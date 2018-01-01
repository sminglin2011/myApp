import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZDatatableComponent } from './z-datatable.component';

describe('ZDatatableComponent', () => {
  let component: ZDatatableComponent;
  let fixture: ComponentFixture<ZDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
