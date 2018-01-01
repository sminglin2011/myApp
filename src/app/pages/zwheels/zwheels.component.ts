import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zwheels',
  templateUrl: './zwheels.component.html',
  styleUrls: ['./zwheels.component.css']
})
export class ZwheelsComponent implements OnInit {

  sidemenus: [any];
  constructor() { }

  ngOnInit() {
    this.sidemenus = [
      {
        title: 'Vehicle Trading',
        url: '',
        child: [
          { title: 'Purchase Agreement', url: 'purchaseagreement' }
        ]
      },
      {
        title: 'Vehicle Master',
        url: '',
        child: [
          {
            title: 'Vehicle'
          }
        ]
      }
    ];
  }

}
