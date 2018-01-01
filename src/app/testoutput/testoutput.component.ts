import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-testoutput',
  template: `
  <div class="counter">
      <button (click)="decrement()">
        Decrement
      </button>
      <input type="text" value="{{count}}">
      <button (click)="increment()">
        Increment
      </button>
    </div>
  `,
  styleUrls: ['./testoutput.component.css']
})
export class TestoutputComponent implements OnInit {
  @Input()
  // tslint:disable-next-line:no-inferrable-types
  count: number = 0;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.count++;
    this.change.emit(this.count);
  }

  decrement() {
    this.count--;
    this.change.emit(this.count);
  }
  constructor() { }

  ngOnInit() {
  }

}
