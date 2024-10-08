import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user-list',
  template: `
  <section class = "section">
    <div class="container">
      <div class="columns is-multiline" *ngIf="user">
        <div class="column is-3" *ngFor="let user of user | async">

          <div class="card">
            <div class="card-content">
              <a routerLink="/users/{{user.login}}">
                {{user.login}}
              </a>
         
          </div>
          </div>

        </div>
        
      </div>
      </div>

</section>

  `,
  styles: ``
})
export class UserListComponent implements OnInit {
  user: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUsers();
  }

}
