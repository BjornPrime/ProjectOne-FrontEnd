import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.services';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  loginFailure = false;

  constructor(private loginService: LoginService, private router: Router, private sessionService: SessionService) { }

  ngOnInit() {
  }

  login() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.loginService.login(credentials).subscribe( (payload) => {
      this.sessionService.newSession(payload);
      this.router.navigateByUrl('/display');
    }, (err) => {
      console.log(err);
      this.loginFailure = true;
      this.router.navigateByUrl('/login');
    });
  }
}
