import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { TestoutputComponent } from './testoutput/testoutput.component';

const routing: Routes = [
  {
    path: '', redirectTo: 'pages', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TestoutputComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    RouterModule.forRoot(routing)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
