import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';
import { ElementHandleEventFn } from '@angular/core/src/view';

@Component({
  selector: 'app-tablegrid',
  templateUrl: './tablegrid.component.html',
  styleUrls: ['./tablegrid.component.css']
})
export class TablegridComponent implements OnInit {

  @Input() columns: any[];
  @Input() rows: any[any];

  // @Output() search = new EventEmitter();

  constructor() { }
  ngOnInit() {
  }
  goSearch(str: any) {
    console.log('grid go search', event);
    this.rows = this.rows.filter(function (item, index, array) {
      for (const property in item) {
        if (item[property] === str) {
          return item;
        }
      }
    });
  }

}
