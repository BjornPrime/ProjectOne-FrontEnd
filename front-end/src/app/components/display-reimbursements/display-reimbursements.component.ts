import { Component, OnInit } from '@angular/core';
import { SubmitService } from 'src/app/services/submit.service';

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

  constructor(private submitService: SubmitService) { }

  ngOnInit() {
    for(let item of this.submitService.getSubmissions()) {
      this.submissions.push(item);
    }
  }

}
