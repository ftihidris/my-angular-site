import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="assets/angular-logo.png" alt="Angular Logo" routerLink="">
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" routerLink="">Home</a>
          <a class="navbar-item" routerLink="/contact">Contact</a>
          <a class="navbar-item" routerLink="/users">Users</a>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .navbar-item {
        color: white;
      }
    `
  ]
})
export class HeaderComponent { }
