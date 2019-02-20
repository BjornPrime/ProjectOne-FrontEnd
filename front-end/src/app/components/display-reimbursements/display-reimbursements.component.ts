import { Component, OnInit } from '@angular/core';
import { SubmitService } from 'src/app/services/submit.service';
import { DisplayWrapperComponent } from '../display-wrapper/display-wrapper.component';

@Component({
  selector: 'app-display-reimbursements',
  templateUrl: './display-reimbursements.component.html',
  styleUrls: ['./display-reimbursements.component.css']
})
export class DisplayReimbursementsComponent implements OnInit {

  submissions = [
    {
      id: 1,
      firstName: 'Arthur',
      lastName: 'Dent',
      amount: 65.84,
      submitted: 'Feb 16th, 2019',
      status: 'Pending'
    }, {
      id: 2,
      firstName: 'Ford',
      lastName: 'Prefect',
      amount: 903.54,
      submitted: 'Jan 13th, 2019',
      status: 'Approved'
    }
  ];

  userIsManager = false;
  constructor(private submitService: SubmitService, private parent: DisplayWrapperComponent) {
    this.userIsManager = parent.roleNo === 2;
   }

  ngOnInit() {
    for(let item of this.submitService.getSubmissions()) {
      this.submissions.push(item);
    }
  }

}
