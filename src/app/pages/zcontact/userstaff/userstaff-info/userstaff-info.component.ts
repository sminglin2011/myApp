import { Component, OnInit } from '@angular/core';
import { UserStaff } from '../model/userstaff.model';

@Component({
  selector: 'app-userstaff-info',
  templateUrl: './userstaff-info.component.html',
  styleUrls: ['./userstaff-info.component.css']
})
export class UserstaffInfoComponent implements OnInit {

  public userStaffInfo: UserStaff;
  constructor() { }

  ngOnInit() {
    this.userStaffInfo = {
      id: 0,
      userName: 'sming',
      nickName: '',
      password: '',
      remeberMe: false,
      email: '',
      confirmPassword: '',
      vcode: ''
    };
  }

}
