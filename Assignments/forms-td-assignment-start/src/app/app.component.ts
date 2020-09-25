import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form', {static:false})
  form: NgForm;

  defaultSubscription = 'advanced';
  submitted = false;
  user = {
    email: '',
    subscription: '',
    password: ''
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value.userData);

    this.user.email = this.form.value.userData.email;
    this.user.subscription = this.form.value.userData.subscription;
    this.user.password = this.form.value.userData.password;
  }
}
