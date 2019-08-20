import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InvestorsService } from 'src/app/services/investors/investors.service';
import { Investor, Holding } from '../investor';
import { MatDialog } from '@angular/material/dialog';
import { InvestorAccountHoldingsDialog } from '../investor-account-holdings/investor-account-holdings.component';

@Component({
  selector: 'investors-list',
  templateUrl: './investors-list.component.html',
  styleUrls: ['./investors-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InvestorsListComponent implements OnInit {

  investors: Investor[];
  filteredInvestors: Investor[];
  order = '';
  isOrderReversed = false;

  constructor(
      private investorsService: InvestorsService,
      public dialog: MatDialog) {
    this.investors = new Array<Investor>();
  }

  ngOnInit() {
    this.getInvestors();
  }

  getInvestors() {
    this.investorsService.getInvestors().subscribe((res: Investor[]) => {
      this.investors = res;
      this.filteredInvestors = res;
    })
  }

  viewHoldings(investor: Investor, account: Account) {
    const dialogRef = this.dialog.open(InvestorAccountHoldingsDialog, {
      width: '320px',
      data: {
        investor,
        account
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  filter(val: string) {
    this.filteredInvestors = this.investors.filter(investor => 
      investor.FullName.toLowerCase().includes(val.toLowerCase()) ||
      investor.PhoneNumber.toLowerCase().includes(val.toLowerCase()) 
    )
  }
}
