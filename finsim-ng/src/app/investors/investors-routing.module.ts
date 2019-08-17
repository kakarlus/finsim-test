import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestorsListComponent } from './investors-list/investors-list.component';


const routes: Routes = [
  {
    path: '',
    component: InvestorsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorsRoutingModule { }
