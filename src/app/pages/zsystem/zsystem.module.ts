import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ZsystemComponent } from './zsystem.component';

const routes: Routes = [
  {
    path: '', component: ZsystemComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ZsystemComponent]
})
export class ZsystemModule { }
