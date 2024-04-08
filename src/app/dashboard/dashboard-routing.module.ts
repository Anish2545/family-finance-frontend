import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'subuser',
        loadChildren: () => import('./subuser/subuser.module').then(m => m.SubuserPageModule)
      },
      {
        path: 'split-travel',
        loadChildren: () => import('./split-travel/split-travel.module').then(m => m.SplitTravelPageModule)
      },
      {
        path: '',
        redirectTo: '/dashboard/profile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
