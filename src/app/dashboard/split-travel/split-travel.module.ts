import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplitTravelPageRoutingModule } from './split-travel-routing.module';

import { SplitTravelPage } from './split-travel.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SplitTravelPageRoutingModule
  ],
  declarations: [SplitTravelPage]
})
export class SplitTravelPageModule {}

