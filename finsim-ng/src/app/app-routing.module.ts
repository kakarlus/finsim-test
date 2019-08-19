import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'investments',
    canActivate: [AuthGuard],
    loadChildren: () => import('./investments/investments.module')
      .then(mod => mod.InvestmentsModule)
  },
  {
    path: 'investors',
    canActivate: [AuthGuard],
    loadChildren: () => import('./investors/investors.module')
      .then(mod => mod.InvestorsModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module')
      .then(mod => mod.LoginModule)
  },
  {
    path: '*',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, // NoPreloading
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
