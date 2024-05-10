import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplitAmountPageRoutingModule } from './split-amount-routing.module';

import { SplitAmountPage } from './split-amount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplitAmountPageRoutingModule
  ],
  declarations: []
})
export class SplitAmountPageModule {}
