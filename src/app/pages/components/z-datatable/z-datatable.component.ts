import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AfterContentInit, AfterViewInit, AfterViewChecked, AfterContentChecked } from '@angular/core/src/metadata/lifecycle_hooks';
/**
 * @description 自定义 datatable 组件 传 columns 和 rows test
 * @author Sming
 * @export
 * @class ZDatatableComponent
 * @implements {AfterContentChecked}
 */
@Component({
  selector: 'app-z-datatable',
  template: `
  <table class="table table-striped table-hover table-bordered">
    <thead>
        <tr>
            <th>NO.</th>
            <th *ngFor="let column of columns">
                {{ column.title }}
            </th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let row of rows;let i=index">
            <td>{{ i +1}}</td>
            <td *ngFor="let column of columns">
                {{ row[column.field] }}
            </td>
        </tr>
    </tbody>
</table>
  `,
  styleUrls: ['./z-datatable.component.css']
})
export class ZDatatableComponent implements AfterContentChecked {

  @Input() columns;
  @Input() rows;
  _columns: any[] = [];

  @Input() datatable: any[];
  constructor() { }

  ngAfterContentChecked() {
    console.log(this.datatable, 'after contentinit');
    if (this.datatable.length > 0) {
      for (const obj of this.datatable) {
        // tslint:disable-next-line:forin
        for (const property in obj) {
          console.log('per property', property);
          this._columns.push(property);
        }
      }
    }
    console.log(this._columns, 11111111);
    this._columns = [];
  }
}
