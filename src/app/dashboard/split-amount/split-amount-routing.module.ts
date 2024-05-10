import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplitAmountPage } from './split-amount.page';

const routes: Routes = [
  {
    path: '',
    component: SplitAmountPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplitAmountPageRoutingModule {}
