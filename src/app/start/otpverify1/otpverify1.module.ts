import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Otpverify1PageRoutingModule } from './otpverify1-routing.module';

import { Otpverify1Page } from './otpverify1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Otpverify1PageRoutingModule
  ],
  declarations: [Otpverify1Page]
})
export class Otpverify1PageModule {}
