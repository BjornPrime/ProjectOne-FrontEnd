import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  private currentUser = {
    firstName: '',
    lastName: '',
    role: 0,
    username: '',
    loggedIn: false,
    email: '',
  };

  constructor() { }

  newSession(loginDetails) {
    this.currentUser = {
      firstName: loginDetails.getAttribute('firstName'),
      lastName: loginDetails.getAttribute('lastName'),
      role: loginDetails.getAttribute('role'),
      username: loginDetails.getAttribute('username'),
      email: loginDetails.getAttribute('email'),
      loggedIn: true
    }
  }
}
