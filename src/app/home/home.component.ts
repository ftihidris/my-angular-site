import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
    <p class="title">My Homepage!</p>
    </div>
    
  </div>
</section>
  `,
  styles: 
  `
  .hero{
    background-image: url('public/assets/background1.jpg') !important;
    background-size: cover;
    background-position: center center;
  }
  `
})
export class HomeComponent {

}
