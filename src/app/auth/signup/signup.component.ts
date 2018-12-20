import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  //TODO add validation message for password at least 6 caracters
  signUp(signupForm:NgForm){
    console.log('this is my form:', signupForm);
    const email = signupForm.value.email;
    const password = signupForm.value.password;
    this.authService.signUpUser(email, password);
  }

}
