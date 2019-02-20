import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  submissions = [{
    id: 0,
    firstName: 'Zaphod',
    lastName: 'Beeblebrox',
    amount: 43.70,
    submitted: 'Sept 34th, 20XZ',
    status: 'rejected'
  }];

  constructor(private httpClient: HttpClient) { }

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

  getSubmissions() {
    return this.submissions;
  }
}
