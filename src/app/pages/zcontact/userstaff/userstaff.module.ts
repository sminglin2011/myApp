import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserstaffComponent } from './userstaff.component';
import { UserstaffInfoComponent } from './userstaff-info/userstaff-info.component';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule } from '@angular/forms';
import { UserStaffService } from './services/userstaff.service';
import {HttpModule} from '@angular/http';
import { UserstafftableComponent } from './userstafftable/userstafftable.component';

const routes: Routes = [
  {
    path: '', component: UserstaffComponent
  },
  { path: 'addUserstaff', component: UserstaffInfoComponent }
];
@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserstaffComponent, UserstaffInfoComponent, UserstafftableComponent],
  providers: [
    UserStaffService
  ]
})
export class UserstaffModule { }
