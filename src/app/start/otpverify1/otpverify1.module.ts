import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

<<<<<<<< HEAD:src/app/start/new/home/home.module.ts
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
========
import { Otpverify1PageRoutingModule } from './otpverify1-routing.module';

import { Otpverify1Page } from './otpverify1.page';
>>>>>>>> 6215c3b3d7e393fe7b7e9a65a12e764d80bd09c3:src/app/start/otpverify1/otpverify1.module.ts

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<<< HEAD:src/app/start/new/home/home.module.ts
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
========
    Otpverify1PageRoutingModule
  ],
  declarations: [Otpverify1Page]
})
export class Otpverify1PageModule {}
>>>>>>>> 6215c3b3d7e393fe7b7e9a65a12e764d80bd09c3:src/app/start/otpverify1/otpverify1.module.ts
