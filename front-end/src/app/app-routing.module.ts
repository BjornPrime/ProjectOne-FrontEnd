import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DisplayWrapperComponent } from './components/display-wrapper/display-wrapper.component';
import { DisplayReimbursementsComponent } from './components/display-reimbursements/display-reimbursements.component';
import { ReimbursementDetailsComponent } from './components/reimbursement-details/reimbursement-details.component';
import { DispositionComponent } from './components/disposition/disposition.component';
import { SubmissionComponent } from './components/submission/submission.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'prefix'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'display',
    component: DisplayWrapperComponent,
    children: [{
        path: '',
        component: DisplayReimbursementsComponent
      }, {
        path: 'reimbursements',
        component: DisplayReimbursementsComponent
      }, {
        path: 'details',
        component: ReimbursementDetailsComponent
      }, {
        path: 'disposition',
        component: DispositionComponent
      }, {
        path: 'submit',
        component: SubmissionComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
