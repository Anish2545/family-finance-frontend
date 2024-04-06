import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubuserPage } from './subuser.page';

const routes: Routes = [
  {
    path: '',
    component: SubuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubuserPageRoutingModule {}
