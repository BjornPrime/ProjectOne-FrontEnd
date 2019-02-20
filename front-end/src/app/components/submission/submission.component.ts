import { Component, OnInit } from '@angular/core';
import { SubmitService } from 'src/app/services/submit.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

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

  submissionFailure = false;

  constructor(private submitService: SubmitService, private router: Router, private sessionService: SessionService) { }

  ngOnInit() {
  }

  submit() {
    console.log('submit started');
    this.newSubmission = {
      author: 1,//this.sessionService.currentUser.id,
      amount: this.amount,
      type: this.type,
      description: this.description,
      documentation: this.receipt,
      submitDate: new Date(),
      status: 1
    }
    console.log('submission created');

    this.submitService.addSubmission(this.newSubmission).subscribe((payload) => {
      console.log(payload);
      this.router.navigateByUrl('/display');
      console.log('navigation attempted');
    }, (err) => {
      console.log(err);
      this.submissionFailure = true;
    });
  }

}
