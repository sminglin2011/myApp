import { Component, OnInit } from '@angular/core';
import { UserStaffService } from './services/userstaff.service';

@Component({
  selector: 'app-userstaff',
  templateUrl: './userstaff.component.html',
  styleUrls: ['./userstaff.component.css']
})
export class UserstaffComponent implements OnInit {
  public tableColumns: any = [];
  public rowsData: any = [];
  addButtonName = 'Add';
  addButtonUrl = 'addUserstaff';
  searchtext = '';

  constructor(private userstaffService: UserStaffService) { }

  ngOnInit() {
    this.loadData('queryStr');
  }

  public loadData(searchText: string) {
    return this.userstaffService.getPostList(searchText, 1).subscribe(
      res => {
        // tslint:disable-next-line:comment-format
        this.rowsData = res['items']; //.slice(this.offset, this.end > this.totalRecords ? this.totalRecords: this.end);
      },
      error => { console.log(error); },
      () => { }
    );
  }
  go() {
    console.log('gogogogogo');
  }
}
