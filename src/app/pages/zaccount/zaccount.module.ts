import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ZaccountComponent } from './zaccount.component';

const routes: Routes = [
  {
    path: '', component: ZaccountComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ZaccountComponent]
})
export class ZaccountModule { }
