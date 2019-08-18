import { Component, OnInit } from '@angular/core';
import { InvestmentsService } from 'src/app/services/investments/investments.service';
import { Investment } from '../investment';

@Component({
  selector: 'investments-list',
  templateUrl: './investments-list.component.html',
  styleUrls: ['./investments-list.component.scss']
})
export class InvestmentsListComponent implements OnInit {

  constructor(
    private investmentsService: InvestmentsService,
    // private investments: Investment[]
    ) { }

  ngOnInit() {
    this.getInvestments();
  }

  getInvestments() {
    this.investmentsService.getInvestments().subscribe(res => {
      console.log('wakekeke');
      console.log(res);
      // this.investments = res;
    })
  }

}
