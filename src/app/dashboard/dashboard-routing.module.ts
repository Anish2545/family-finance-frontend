import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [

  {

    path: 'dashboard',
    component: DashboardPage,
    children: [

      {
        path: 'transaction',
        loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule)
      },

  {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },


      {
        path: '',
        redirectTo: '/dashboard/profile',
        pathMatch: 'full'
      }
    ]
  },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
