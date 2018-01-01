import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserstaffComponent } from './userstaff.component';

const routes: Routes = [
  {
    path: '', component: UserstaffComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserstaffComponent]
})
export class UserstaffModule { }
