import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestoutputComponent } from './testoutput.component';

describe('TestoutputComponent', () => {
  let component: TestoutputComponent;
  let fixture: ComponentFixture<TestoutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestoutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
