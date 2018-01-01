import { Component } from '@angular/core';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  template: `
  <div class="app">
      Parent: {{ myCount }}
      <app-testoutput
        [count]="myCount"
        (change)="countChange($event)">
      </app-testoutput>
    </div>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
// test  from below
myCount = 10;
  countChange(event) {
this.myCount = event;
  }
}
