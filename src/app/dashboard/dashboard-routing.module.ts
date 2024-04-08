import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: 'subuser',
    loadChildren: () => import('./subuser/subuser.module').then( m => m.SubuserPageModule)
  },
  {
    path: 'dashboard',
    component: DashboardPage
  },  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'split-travel',
    loadChildren: () => import('./split-travel/split-travel.module').then( m => m.SplitTravelPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
