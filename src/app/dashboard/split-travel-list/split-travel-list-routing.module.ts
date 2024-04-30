import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplitTravelListPage } from './split-travel-list.page';

const routes: Routes = [
  {
    path: '',
    component: SplitTravelListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplitTravelListPageRoutingModule {}
