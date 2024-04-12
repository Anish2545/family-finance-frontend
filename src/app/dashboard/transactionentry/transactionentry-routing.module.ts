import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionentryPage } from './transactionentry.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionentryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionentryPageRoutingModule {}
