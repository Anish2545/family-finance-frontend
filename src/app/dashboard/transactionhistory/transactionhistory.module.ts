import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TransactionhistoryPageRoutingModule } from './transactionhistory-routing.module';
import { TransactionHistoryPage } from './transactionhistory.page'; // Ensure the path is correct

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionhistoryPageRoutingModule
  ],
  declarations: [TransactionHistoryPage],
})
export class TransactionhistoryModule {}
