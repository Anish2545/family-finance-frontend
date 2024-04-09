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
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
