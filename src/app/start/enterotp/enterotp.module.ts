import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterotpPageRoutingModule } from './enterotp-routing.module';

import { EnterotpPage } from './enterotp.page';
import { NgOtpInputModule } from 'ng-otp-input';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterotpPageRoutingModule,
    NgOtpInputModule
  ],
  declarations: [EnterotpPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class EnterotpPageModule {}
