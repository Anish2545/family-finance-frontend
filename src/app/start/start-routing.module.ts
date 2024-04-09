import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPage } from './start.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./carousel/carousel.module').then( m => m.CarouselPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'enter-otp',
    loadChildren: () => import('./enterotp/enterotp.module').then( m => m.EnterotpPageModule)
  },
  {
    path: 'otp-verify',
    loadChildren: () => import('./otpverify2/otpverify2.module').then( m => m.Otpverify2PageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'otpverify1',
    loadChildren: () => import('./otpverify1/otpverify1.module').then( m => m.Otpverify1PageModule)
  },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartPageRoutingModule {}
