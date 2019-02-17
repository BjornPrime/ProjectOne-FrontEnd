import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DisplayReimbursementsComponent } from './components/display-reimbursements/display-reimbursements.component';
import { LoginService } from './services/login.services';
import { ReimbursementsService } from './services/reimbursements.services';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReimbursementDetailsComponent } from './components/reimbursement-details/reimbursement-details.component';
import { SubmissionComponent } from './components/submission/submission.component';
import { DispositionComponent } from './components/disposition/disposition.component';
import { DisplayWrapperComponent } from './components/display-wrapper/display-wrapper.component';
import { DisposeService } from './services/dispose.service';
import { LogoutService } from './services/logout.service';
import { SubmitService } from './services/submit.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DisplayReimbursementsComponent,
    ReimbursementDetailsComponent,
    SubmissionComponent,
    DispositionComponent,
    DisplayWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [LoginService, ReimbursementsService, DisposeService, LogoutService, SubmitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
