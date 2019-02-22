import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { ReimbursementsService } from 'src/app/services/reimbursements.services';
import { DisposeService } from 'src/app/services/dispose.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reimbursement-details',
  templateUrl: './reimbursement-details.component.html',
  styleUrls: ['./reimbursement-details.component.css']
})
export class ReimbursementDetailsComponent implements OnInit {

  entry = {};

  userIsManager = false;

  getType(num: number) {
    switch(num) {
      case 1:
        return 'Lodging';
      case 2:
        return 'Travel';
      case 3:
        return 'Food';
      case 4:
        return 'Other';
      default:
        return 'Unknown';
    }
  }

  getStatus(num: number) {
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

  constructor(private sessionService: SessionService, private reimbursementsService: ReimbursementsService,
    private disposeService: DisposeService, private router: Router) { }

  ngOnInit() {
    if (this.sessionService.currentUser.role === 2) {
      this.userIsManager = true;
    }
    this.entry = this.reimbursementsService.getEntry();
    this.entry['submitDate'] = new Date(this.entry['submitDate']);
  }

  approve(entryID: number) {
    this.disposeService.dispose(2, entryID).subscribe( (payload) => {
      this.router.navigateByUrl('/display');
    });
  }

  reject(entryID: number) {
    this.disposeService.dispose(3, entryID).subscribe( (payload) => {
      this.router.navigateByUrl('/display');
    });
  }

  canDispose() {
    let entry = this.entry;
    if (this.userIsManager && this.entry['status']==1 && (this.entry['author'] != this.sessionService.currentUser.id)) {
      return true;
    } else {
      return false;
    }
  }

}
