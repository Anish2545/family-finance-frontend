import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Otpverify1Page } from './otpverify1.page';


const routes: Routes = [
  {
    path: '',
    component: Otpverify1Page

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Otpverify1PageRoutingModule {}

