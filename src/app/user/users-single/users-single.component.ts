import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-single',
  template: `
  <section class="section">
    <div class="container">
    <div class="card" *ngIf="user">
      <img [src]="user.avatar.url">
      <h2>
        {{user.login}}
      </h2>
    </div>
    </div>

</section>
  `,
  styles: ``
})
export class UsersSingleComponent implements OnInit {
  user: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params =>{
      const username = params['username'];

    this.userService
      .getUsers('username')
      .subscribe(user =>{this.user = user;
      });
    });
  }

}
