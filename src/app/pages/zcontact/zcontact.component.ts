import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zcontact',
  templateUrl: './zcontact.component.html',
  styleUrls: ['./zcontact.component.css']
})
export class ZcontactComponent implements OnInit {

  sidemenus: [any];

  constructor() { }

  ngOnInit() {
    this.sidemenus = [
      {
        title: 'Company', url: 'company'
      },
      {
        title: 'Person', url: 'person'
      },
      {
        title: 'User Staff', url: 'userstaff'
      }
    ];
  }

}
