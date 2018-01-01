import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  @Input() @Output() menuitem: any;
  // tslint:disable-next-line:no-inferrable-types
  isCollapsed: boolean = true;

  expanded(event: any) { }

  collapsed(event: any) { }

  constructor() { }

  ngOnInit() {
    console.log('sidemenu', this.menuitem);
  }

}
