import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserStaff } from '../model/userstaff.model';


@Injectable()
export class UserStaffService {
    public userstaffList = 'test-data/userlist-data.json';

    constructor(public http: Http) { }

    public getPostList(searchText: string, page: number = 1): Observable<UserStaff[]> {
        let url = this.userstaffList;
        // tslint:disable-next-line:prefer-const
        let params = new URLSearchParams();
        if (searchText) {
            params.set('searchText', searchText);
            url = this.userstaffList;
            console.log(`searchText=${searchText}`);
        }
        params.set('page', String(page));

        return this.http
            .get(url, { search: params })
            .map((res: Response) => {
                // tslint:disable-next-line:prefer-const
                let result = res.json();
                console.log(result);
                return result;
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    public getPostNumber(): number {
        return 0;
    }

    public addPost(user: any) {

    }

    public search() {
    }
}
