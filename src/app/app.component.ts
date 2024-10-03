import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <app-contact></app-contact>
  <app-home></app-home>
  <app-footer></app-footer>
  <router-outlet></router-outlet>

  `,
  styles: []
})
export class AppComponent {
  title = 'my-app';
}
