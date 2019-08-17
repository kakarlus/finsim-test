import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestorsRoutingModule } from './investors-routing.module';
import { InvestorsListComponent } from './investors-list/investors-list.component';


@NgModule({
  declarations: [InvestorsListComponent],
  imports: [
    CommonModule,
    InvestorsRoutingModule
  ]
})
export class InvestorsModule { }
