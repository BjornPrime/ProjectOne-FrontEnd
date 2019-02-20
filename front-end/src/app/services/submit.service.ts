import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  submissions = [{
    firstName: 'Zaphod',
    lastName: 'Beeblebrox',
    amount: 43.70,
    submitted: 'Sept 34th, 20XZ',
    status: 'rejected'
  }];

  constructor(private httpClient: HttpClient) { }

  addSubmission(submission) {
    this.submissions.push(submission);
    console.log(this.submissions);
  }

  getSubmissions() {
    return this.submissions;
  }
}
