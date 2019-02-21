import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  constructor(private httpClient: HttpClient, private sessionService: SessionService) { }

  // addSubmission(submission) {
  //   this.submissions.push(submission);
  //   console.log(this.submissions);
  // }

  addSubmission(submission) {
    console.log('submit invoked');
    const url = `${environment.apiUrl}/submit`;
    console.log(url);
    return this.httpClient.post(url, submission);
  }

  getSubmissions(userID) {
    console.log('getsubmissions invoked');
    const url = `${environment.apiUrl}/reimbursements`;
    const output = this.httpClient.post(url, userID);
    return output;
  }
}
