import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.loginService.login(credentials).subscribe( (payload) => {
      this.router.navigateByUrl('./display');
    }, (err) => {
      console.log(err);
    });
  }
}
