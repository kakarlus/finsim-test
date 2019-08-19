import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorAccountHoldingsDialog } from './investor-account-holdings.component';

describe('InvestorAccountHoldingsDialog', () => {
  let component: InvestorAccountHoldingsDialog;
  let fixture: ComponentFixture<InvestorAccountHoldingsDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorAccountHoldingsDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorAccountHoldingsDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
