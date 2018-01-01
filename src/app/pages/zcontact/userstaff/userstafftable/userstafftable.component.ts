import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userstafftable',
  template: `
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Search for..." >
    <span class="input-group-btn">
          <button class="btn btn-default" type="button" (click)="goSearch()">GO</button>
        </span>
</div>

  `,
  styleUrls: ['./userstafftable.component.css']
})
export class UserstafftableComponent implements OnInit {

@Output()
search = new EventEmitter();
  constructor() { }
goSearch() {
  this.search.emit();
}
  ngOnInit() {
  }

}
