import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplitTravelListPage } from './split-travel-list.page';
import { SplitAmountPage } from '../split-amount/split-amount.page';

const routes: Routes = [
  {
    path: '',
    component: SplitTravelListPage
  },
  { path: 'split-amount/:tripId/:title', component: SplitAmountPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplitTravelListPageRoutingModule {}
