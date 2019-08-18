import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentsRoutingModule } from './investments-routing.module';
import { InvestmentsListComponent } from './investments-list/investments-list.component';
import { InvestmentsService } from '../services/investments/investments.service';


@NgModule({
  declarations: [InvestmentsListComponent],
  imports: [
    CommonModule,
    InvestmentsRoutingModule
  ],
  providers: [InvestmentsService]
})
export class InvestmentsModule { }
