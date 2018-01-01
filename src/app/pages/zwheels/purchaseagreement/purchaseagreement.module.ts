import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseagreementComponent } from './purchaseagreement.component';

import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '', component: PurchaseagreementComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PurchaseagreementComponent]
})
export class PurchaseagreementModule { }
