import { Component, OnInit } from '@angular/core';
import { InvestmentsService } from 'src/app/services/investments/investments.service';
import { Investment } from '../investment';

@Component({
  selector: 'investments-list',
  templateUrl: './investments-list.component.html',
  styleUrls: ['./investments-list.component.scss']
})
export class InvestmentsListComponent implements OnInit {

  investments: Investment[];
  filteredInvestments: Investment[];
  order = '';
  isOrderReversed = true;

  constructor(
      private investmentsService: InvestmentsService) {
    this.investments = new Array<Investment>();
  }

  ngOnInit() {
    this.getInvestments();
  }

  getInvestments() {
    this.investmentsService.getInvestments().subscribe((res: Investment[]) => {
      this.investments = res;
      this.filteredInvestments = res;
    })
  }

  filter(val: string) {
    this.filteredInvestments = this.investments.filter(investment => 
      investment.InvestmentName.toLowerCase().includes(val.toLowerCase()) ||
      investment.InvestmentCode.toLowerCase().includes(val.toLowerCase()) ||
      investment.Market.toLowerCase().includes(val.toLowerCase())
    )
  }

}
