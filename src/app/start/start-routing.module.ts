import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPage } from './start.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./carousel/carousel.module').then( m => m.CarouselPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sigin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartPageRoutingModule {}
