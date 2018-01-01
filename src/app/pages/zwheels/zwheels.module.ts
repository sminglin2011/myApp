import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ZwheelsComponent } from './zwheels.component';
import { CollapseModule } from 'ngx-bootstrap/collapse/collapse.module';
import { patch } from 'webdriver-js-extender';
import { SidemenuModule } from '../sidemenu/sidemenu.module';

const routing: Routes = [
  {
    path: '', component: ZwheelsComponent,
    children: [
      {
        path: 'purchaseagreement', loadChildren: './purchaseagreement/purchaseagreement.module#PurchaseagreementModule'
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    CollapseModule,
    RouterModule.forChild(routing),
    SidemenuModule
  ],
  declarations: [
    ZwheelsComponent
  ]
})
export class ZwheelsModule { }
