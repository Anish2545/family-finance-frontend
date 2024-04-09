import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<<< HEAD:src/app/start/new/home/home-routing.module.ts
import { HomePage } from './home.page';
========
import { Otpverify1Page } from './otpverify1.page';
>>>>>>>> 6215c3b3d7e393fe7b7e9a65a12e764d80bd09c3:src/app/start/otpverify1/otpverify1-routing.module.ts

const routes: Routes = [
  {
    path: '',
<<<<<<<< HEAD:src/app/start/new/home/home-routing.module.ts
    component: HomePage
========
    component: Otpverify1Page
>>>>>>>> 6215c3b3d7e393fe7b7e9a65a12e764d80bd09c3:src/app/start/otpverify1/otpverify1-routing.module.ts
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
<<<<<<<< HEAD:src/app/start/new/home/home-routing.module.ts
export class HomePageRoutingModule {}
========
export class Otpverify1PageRoutingModule {}
>>>>>>>> 6215c3b3d7e393fe7b7e9a65a12e764d80bd09c3:src/app/start/otpverify1/otpverify1-routing.module.ts
