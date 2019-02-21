import { Component, OnInit } from '@angular/core';
import { SubmitService } from 'src/app/services/submit.service';
import { DisplayWrapperComponent } from '../display-wrapper/display-wrapper.component';
import { SessionService } from 'src/app/services/session.service';
import { ReimbursementsService } from 'src/app/services/reimbursements.services';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-reimbursements',
  templateUrl: './display-reimbursements.component.html',
  styleUrls: ['./display-reimbursements.component.css']
})
export class DisplayReimbursementsComponent implements OnInit {

  submissions = [
  ];

  userIsManager = false;
  statusName(num: number) {
    switch(num) {
      case 1:
        return 'Pending';
      case 2:
       return 'Approved';
      case 3:
        return 'Rejected';
      default:
        return 'Unknown';
    }
  }

  
  constructor(private submitService: SubmitService, private router: Router, 
    private sessionService: SessionService, private reimbursementsService: ReimbursementsService) {
    this.userIsManager = this.sessionService.currentUser['role'] === 2;
   }

  ngOnInit() {
    this.submitService.getSubmissions(this.sessionService.currentUser.id).subscribe( (payload: Array<{}>) => {
      console.log('get returned');
      console.log(payload);
      this.submissions = payload;
    });
    // for(let item of this.submitService.getSubmissions().body) {
    //   this.submissions.push(item);
    // }
  }

  seeDetails(entryID: number) {
    this.reimbursementsService.getDetails(entryID).subscribe( (payload) => {
      this.reimbursementsService.setEntry(payload);
    }
    );
    this.router.navigateByUrl('/display/details');
  }

}
