import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-addbutton',
  templateUrl: './addbutton.component.html',
  styleUrls: ['./addbutton.component.css']
})
export class AddbuttonComponent implements OnInit {

  @Input()
  url: string;
  @Input()
  name: string;
  constructor() { }

  ngOnInit() {
  }

}
