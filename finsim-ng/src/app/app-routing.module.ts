import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'investments',
    loadChildren: () => import('./investments/investments.module').then(mod => mod.InvestmentsModule)
  },
  {
    path: 'investors',
    loadChildren: () => import('./investors/investors.module').then(mod => mod.InvestorsModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: '*',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
