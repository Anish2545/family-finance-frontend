import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BudgetalertPageRoutingModule } from './budgetalert-routing.module';

import { BudgetalertPage } from './budgetalert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BudgetalertPageRoutingModule
  ],
  declarations: [BudgetalertPage]

})
export class BudgetalertPageModule {}