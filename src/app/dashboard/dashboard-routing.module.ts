import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
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
        redirectTo: '/dashboard/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'dummy',
    loadChildren: () => import('./dummy/dummy.module').then( m => m.DummyPageModule)
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
