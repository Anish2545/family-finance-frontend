import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetalertPage } from './budgetalert.page';

const routes: Routes = [
  {
    path: '',
    component: BudgetalertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetalertPageRoutingModule {}

