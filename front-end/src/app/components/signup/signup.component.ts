import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username = '';
  email = '';
  password = '';
  reentry = '';
  firstName = '';
  lastName = '';

  signupError = false;

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  signup() {
    
    if(this.reentry !== this.password) {
      this.signupError = true;
      return;
    } else {
      this.signupError = false;
    }
    
    const signupCredentials = {
      username: this.username,
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    };

    this.loginService.signup(signupCredentials).subscribe(
      (result) => {
        this.router.navigateByUrl('/login');
      }, (error) => {
        window.alert('Invalid credentials')
      }
    );
  }
}
