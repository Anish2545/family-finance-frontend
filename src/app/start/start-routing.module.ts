import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPage } from './start.page';

const routes: Routes = [
   {

    path: '',
    loadChildren: () => import('./enterotp/enterotp.module').then( m => m.EnterotpPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./otpverify2/otpverify2.module').then( m => m.Otpverify2PageModule)
  },

  {
    path: '',

    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },

  {
    path: '',
    loadChildren: () => import('./carousel/carousel.module').then( m => m.CarouselPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartPageRoutingModule {}
