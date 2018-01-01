import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Search for..." [(ngModel)]="queryStr">
    <span class="input-group-btn">
          <button class="btn btn-default" type="button" (click)="go($event)">GO</button>
        </span>
</div>
  `
})
export class SearchtextComponent implements OnInit {

  @Output()
  search = new EventEmitter();

  @Input()
  @Output()
  queryStr: string;

  go(event: any) {
    this.search.emit(this.queryStr);
  }
  constructor() { }
  ngOnInit() {
  }

}
