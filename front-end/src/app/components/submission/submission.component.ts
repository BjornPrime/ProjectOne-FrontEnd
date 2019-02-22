import { Component, OnInit } from '@angular/core';
import { SubmitService } from 'src/app/services/submit.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

//  public radioGroupForm: FormGroup;

  amount = '';
  type = 0;
  description = '';
  receipt = '';
  model = 1;

  newSubmission = {};

  setType(num: number) {
    this.type = num;
    console.log(this.type);
  };

  submissionFailure = false;

  constructor(private submitService: SubmitService,
              private router: Router, private sessionService: SessionService) { }

  ngOnInit() {
    // this.radioGroupForm = this.formBuilder.group({
    //   model : 1
    // });
  }

  submit() {
    console.log('submit started');
    this.newSubmission = {
      author: this.sessionService.currentUser.id,
      authorName: `${this.sessionService.currentUser.firstName} ${this.sessionService.currentUser.lastName}`,
      amount: this.amount,
      type: this.type,
      description: this.description,
   //   documentation: this.receipt,
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
