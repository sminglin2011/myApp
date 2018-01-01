import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchaseagreement',
  templateUrl: './purchaseagreement.component.html',
  styleUrls: ['./purchaseagreement.component.css']
})
export class PurchaseagreementComponent implements OnInit {

  public tableColumns: any = [
    {
      title: '用户名',
      field: 'username'
    },
    {
      title: '密码',
      field: 'password'
    }
  ];

  public rowsData: any = [
    {
      'username': 'sming',
      'password': '999999'
    },
    {
      'username': 'shui',
      'password': '999999'
    },
    {
      'username': 'carrie',
      'password': '999999'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
