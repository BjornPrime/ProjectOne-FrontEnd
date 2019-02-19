import { Component, OnInit } from '@angular/core';
import { SubmitService } from 'src/app/services/submit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  amount = '';
  type = '';
  description = '';
  receipt = '';

  newSubmission = {};

  constructor(private submitService: SubmitService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    console.log('submit started');
    this.newSubmission = {
      amount: this.amount,
      type: this.type,
      description: this.description,
      receipt: this.receipt,
      submitted: new Date(),
      status: 'Pending'
    }
    console.log('submission created');

    this.submitService.addSubmission(this.newSubmission);
    console.log('submit invoked');
    this.router.navigateByUrl('/display');
    console.log('navigation attempted');
  }

}
