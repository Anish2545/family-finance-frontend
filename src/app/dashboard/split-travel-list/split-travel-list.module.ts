import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplitTravelListPageRoutingModule } from './split-travel-list-routing.module';

import { SplitTravelListPage } from './split-travel-list.page';
import { AddTripModalComponent } from '../add-trip-modal/add-trip-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SplitTravelListPageRoutingModule
  ],
  declarations: [SplitTravelListPage,AddTripModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SplitTravelListPageModule {}
