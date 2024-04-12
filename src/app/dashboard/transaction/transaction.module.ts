import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TransactionPageRoutingModule } from './transaction-routing.module';
import { TransactionPage } from './transaction.page';



@NgModule({
  declarations: [
    TransactionPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    TransactionPageRoutingModule // Import IonicModule
  ],
  exports: [
    TransactionPage // Export your component if needed
  ]
})
export class TransactionModule { }
