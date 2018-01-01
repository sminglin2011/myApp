import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  @Output()
  headerMenu: any;
  // tslint:disable-next-line:no-inferrable-types
  isCollapsed: boolean = true;

  constructor() { }
  // tslint:disable-next-line:no-trailing-whitespace
  
  ngOnInit() {
  }

}
