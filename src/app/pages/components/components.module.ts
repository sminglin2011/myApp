import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablegridComponent } from './tablegrid/tablegrid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TablegridComponent],
  exports: [
    TablegridComponent
  ]
})
export class ComponentsModule { }
