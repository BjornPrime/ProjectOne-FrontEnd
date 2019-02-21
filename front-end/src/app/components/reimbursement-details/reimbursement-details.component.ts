import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { ReimbursementsService } from 'src/app/services/reimbursements.services';

@Component({
  selector: 'app-reimbursement-details',
  templateUrl: './reimbursement-details.component.html',
  styleUrls: ['./reimbursement-details.component.css']
})
export class ReimbursementDetailsComponent implements OnInit {

  entry = this.reimbursementsService.getEntry();

  constructor(private sessionService: SessionService, private reimbursementsService: ReimbursementsService) { }

  ngOnInit() {

  }

}
