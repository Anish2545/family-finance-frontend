import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { TransactionentryPageRoutingModule } from './transactionentry-routing.module';

import { TransactionentryPage } from './transactionentry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TransactionentryPageRoutingModule
  ],
  declarations: [TransactionentryPage]
})
export class TransactionentryPageModule {}
