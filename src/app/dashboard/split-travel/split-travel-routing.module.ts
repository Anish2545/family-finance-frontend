import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplitTravelPage } from './split-travel.page';

const routes: Routes = [
  {
    path: '',
    component: SplitTravelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplitTravelPageRoutingModule {}
