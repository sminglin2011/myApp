import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tablegrid',
  templateUrl: './tablegrid.component.html',
  styleUrls: ['./tablegrid.component.css']
})
export class TablegridComponent implements OnInit {

  @Input() columns: any[];
  @Input() rows: any[];

  constructor() { }

  ngOnInit() {
  }

}
