import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otpverify2Page } from './otpverify2.page';

const routes: Routes = [
  {
    path: '',
    component: Otpverify2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otpverify2PageRoutingModule {}
