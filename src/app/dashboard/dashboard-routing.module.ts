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
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'budgetalert',
        loadChildren: () => import('./budgetalert/budgetalert.module').then( m => m.BudgetalertPageModule)
      }, 
        
      {
        path: 'transactionentry',
        loadChildren: () => import('./transactionentry/transactionentry.module').then( m => m.TransactionentryPageModule)
      },
      {
        path: 'subuser',
        loadChildren: () => import('./subuser/subuser.module').then( m => m.SubuserPageModule)
      },
      {
        path: 'split-travel',
        loadChildren: () => import('./split-travel/split-travel.module').then( m => m.SplitTravelPageModule)
      },


      {
        path: '',
        redirectTo: '/dashboard/home',
        pathMatch: 'full'
      }
    ]
  }
  ];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
