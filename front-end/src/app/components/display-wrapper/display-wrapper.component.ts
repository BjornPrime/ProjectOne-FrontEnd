import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-wrapper',
  templateUrl: './display-wrapper.component.html',
  styleUrls: ['./display-wrapper.component.css']
})
export class DisplayWrapperComponent implements OnInit {

  firstName = 'Connor';
  lastName = 'Shepard';
  roleNo = 1;
  email = 'cshep@comcast.com';

  role = this.chooseRole(this.roleNo);

  chooseRole(num: number) {
    switch(num) {
      case 1:
        return 'Employee';
      case 2:
        return 'Manager';
      default:
        return 'Unknown';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
