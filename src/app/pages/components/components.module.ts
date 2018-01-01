import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TablegridComponent } from './tablegrid/tablegrid.component';
import { AddbuttonComponent } from './addbutton/addbutton.component';
import { FormsModule } from '@angular/forms';
import { SearchtextComponent } from './searchtext/searchtext.component';
import { ZInputComponent } from './z-input/z-input.component';
import { ZDatatableComponent } from './z-datatable/z-datatable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    TablegridComponent, AddbuttonComponent, SearchtextComponent,
    ZInputComponent,
    ZDatatableComponent
  ],
  exports: [
    TablegridComponent,
    AddbuttonComponent,
    ZInputComponent,
    ZDatatableComponent
  ],
  providers: [
  ]
})
export class ComponentsModule { }
