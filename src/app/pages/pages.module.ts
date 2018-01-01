import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page.component';

import { routing } from './pages.routing';


@NgModule({
  imports: [
    CommonModule,
    routing,
    CollapseModule
  ],
  declarations: [
     PageComponent, HeaderComponent, HomeComponent
  ],
  exports: [
  ]
})
export class PagesModule { }
