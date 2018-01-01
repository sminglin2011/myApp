import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule} from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { ZcontactComponent } from './zcontact.component';
import { SidemenuModule } from '../sidemenu/sidemenu.module';

const routes: Routes = [
  {
    path: '', component: ZcontactComponent
  },
  {
    path: 'userstaff', loadChildren: './userstaff/userstaff.module#UserstaffModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    CollapseModule,
    RouterModule.forChild(routes),
    SidemenuModule
  ],
  declarations: [ZcontactComponent]
})
export class ZcontactModule { }
