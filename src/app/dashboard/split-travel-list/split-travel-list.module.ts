import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplitTravelListPageRoutingModule } from './split-travel-list-routing.module';

import { SplitTravelListPage } from './split-travel-list.page';
import { AddTripModalComponent } from '../add-trip-modal/add-trip-modal.component';
import { AddExpenseModalComponent } from '../add-expense-modal/add-expense-modal.component';
import { ViewTripExpenseModalComponent } from '../view-trip-expense-modal/view-trip-expense-modal.component';
import { AddTripPeopleModalComponent } from '../add-trip-people-modal/add-trip-people-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SplitTravelListPageRoutingModule
  ],
  declarations: [SplitTravelListPage,AddTripModalComponent,AddExpenseModalComponent,ViewTripExpenseModalComponent,AddTripPeopleModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SplitTravelListPageModule {}
