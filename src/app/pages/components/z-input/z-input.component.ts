import {
  forwardRef,
  Component,
  HostListener,
  Input,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
  ViewEncapsulation,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-z-input',
  template: `
  <input #input [type]="type" [name]="name" (click)="_handleFocus($event)">
  `,
  styleUrls: ['./z-input.component.css']
})
export class ZInputComponent implements OnInit {

  // 外部传入属性
  @Input() type = 'text';
  @Input() name: string = null;
  @Input() placeholder: string = null;
  @Input() minlength: number;
  @Input() maxlength: number;

  private _value: any = '';
  private _focusEmitter = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() zClick = this._focusEmitter.asObservable();

  _handleFocus(event: any) {
    console.log('click.......');
    this._focusEmitter.emit(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
