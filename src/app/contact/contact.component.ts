import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
   <section class="hero is-danger is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Contact Us</h1> 
      </div>

    </div>
   </section>

   <section class="section">
    <div class="container">
      <form (ngSubmit)=submitForm() #contactForm="ngForm">
        <div class="field">
          <label class="label">Name</label>
          <input type="text" name="name" class="input" [(ngModel)]="name" #nameInput="ngModel" required> 
          <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">
            Your name is required
          </div>
          
        </div>

        <div class="field">
          <label class="label">Email</label>
          <input type="email" name="email" class="input" [(ngModel)]="email" #emailInput="ngModel" required>
          <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">
            Your email is required
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <textarea type="message" class="textarea" [(ngModel)]="message"></textarea>
          

          
        </div>

        <button 
        type="submit" 
        class="button is-dark is-danger" 
        [disabled]= "contactForm.invalid">
          Send!
        </button>
      </form>

    </div>
   </section>
  `,
  styles: ``
})
export class ContactComponent {

  name!: string;
  email!: string;
  message!: string;

  ngOnInit() { }

  submitForm() {
    const message = `My name is ${this.name} and the email is ${this.email}`;
    alert(message)
  }

}
