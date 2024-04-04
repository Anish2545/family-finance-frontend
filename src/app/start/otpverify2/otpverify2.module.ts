import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otpverify2PageRoutingModule } from './otpverify2-routing.module';

import { Otpverify2Page } from './otpverify2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otpverify2PageRoutingModule
  ],
  declarations: [Otpverify2Page]
})
export class Otpverify2PageModule {}
