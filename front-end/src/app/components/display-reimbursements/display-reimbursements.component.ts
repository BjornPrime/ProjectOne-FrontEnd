import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-reimbursements',
  templateUrl: './display-reimbursements.component.html',
  styleUrls: ['./display-reimbursements.component.css']
})
export class DisplayReimbursementsComponent implements OnInit {

  submissions = [
    {
      amount: 65.84,
      submitted: 'Feb 16th, 2019',
      status: 'Pending'
    }, {
      amount: 903.54,
      submitted: 'Jan 13th, 2019',
      status: 'Approved'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
