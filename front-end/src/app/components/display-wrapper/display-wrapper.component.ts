import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-display-wrapper',
  templateUrl: './display-wrapper.component.html',
  styleUrls: ['./display-wrapper.component.css']
})
export class DisplayWrapperComponent implements OnInit {

  currentUser = {};

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

  constructor(private sessionService: SessionService) {
    this.currentUser = sessionService.currentUser;

   }

  ngOnInit() {
  }

}
