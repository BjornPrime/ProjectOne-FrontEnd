import { Component, OnInit } from '@angular/core';
import { SubmitService } from 'src/app/services/submit.service';
import { DisplayWrapperComponent } from '../display-wrapper/display-wrapper.component';
import { SessionService } from 'src/app/services/session.service';
import { ReimbursementsService } from 'src/app/services/reimbursements.services';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DisposeService } from 'src/app/services/dispose.service';

@Component({
  selector: 'app-display-reimbursements',
  templateUrl: './display-reimbursements.component.html',
  styleUrls: ['./display-reimbursements.component.css']
})
export class DisplayReimbursementsComponent implements OnInit {

  submissions = [
  ];
  statusFilter = 0;
  userIsManager = false;
  statusName(num: number) {
    switch(num) {
      case 0:
        return '';
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

  unfiltered(num: number) {
    if(this.statusFilter === 0 || num === this.statusFilter) {
      return true;
    } else {
      return false;
    }
  }

  
  constructor(private submitService: SubmitService, private router: Router, 
              private sessionService: SessionService, 
              private reimbursementsService: ReimbursementsService,
              private disposeService: DisposeService) {
    this.userIsManager = this.sessionService.currentUser['role'] === 2;
   }

  ngOnInit() {
    this.submitService.getSubmissions(this.sessionService.currentUser.id).subscribe( (payload: Array<{}>) => {
      console.log('get returned');
      console.log(payload);
      this.submissions = payload;
      this.submissions.sort(function(a, b){return a.submitDate - b.submitDate; });
    });
    // for(let item of this.submitService.getSubmissions().body) {
    //   this.submissions.push(item);
    // }
  }

  seeDetails(entryID: number) {
    console.log(entryID);
    this.reimbursementsService.getDetails(entryID).subscribe( (payload) => {
      this.reimbursementsService.setEntry(payload);
      this.router.navigateByUrl('/display/details');
    });
  }

  

}
