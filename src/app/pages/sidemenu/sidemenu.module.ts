import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap';
import { SidemenuComponent } from './sidemenu.component';

@NgModule({
  imports: [
    CommonModule,
    // tslint:disable-next-line:comment-format
    RouterModule, //因为有用到routerLink所有要导入RouterMoudle
    CollapseModule
  ],
  declarations: [ SidemenuComponent ],
  exports: [
    SidemenuComponent
  ]
})
export class SidemenuModule { }
