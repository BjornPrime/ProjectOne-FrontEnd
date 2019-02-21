import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  currentUser = {
    firstName: '',
    lastName: '',
    role: 0,
    username: '',
    loggedIn: false,
    email: '',
    id: ''
  };

  constructor() { }

  newSession(loginDetails) {
    this.currentUser = {
      firstName: loginDetails['firstName'],
      lastName: loginDetails['lastName'],
      role: loginDetails['userRole'],
      username: loginDetails['username'],
      email: loginDetails['email'],
      id: loginDetails['userID'],
      loggedIn: true
    }
    console.log(this.currentUser);
  }

  endSession() {
    this.currentUser = {
      firstName: '',
      lastName: '',
      role: 0,
      username: '',
      loggedIn: false,
      email: '',
      id: ''
     };
  }
}
