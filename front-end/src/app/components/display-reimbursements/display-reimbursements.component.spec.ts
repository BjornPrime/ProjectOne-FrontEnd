import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayReimbursementsComponent } from './display-reimbursements.component';

describe('DisplayReimbursementsComponent', () => {
  let component: DisplayReimbursementsComponent;
  let fixture: ComponentFixture<DisplayReimbursementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayReimbursementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayReimbursementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
