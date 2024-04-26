import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/util.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transactionhistory.page.html',
  styleUrls: ['./transactionhistory.page.scss'],
})
export class TransactionHistoryPage implements OnInit {
  form: FormGroup; transactions: any;
  ; // Assuming transactions are stored in this array

  constructor(private formBuilder: FormBuilder, private router: Router, private utilService: UtilService,
    private toastController: ToastController) {
    this.form = this.formBuilder.group({
    });
    debugger
    // Assuming you fetch transactions from somewhere (e.g., a service) and assign them to the transactions array
    this.fetchTransactions();
  }
  
  ngOnInit(): void {
    
  }

  fetchTransactions() {
    let reqBody = {
      first: 0,
      rows: 10

    };
    this.utilService.callPostApi(reqBody, "transaction/transactionlist").subscribe(async result => {
      if (result.flag) {
        this.transactions = result.data;
        //this.router.navigate(['/dashboard/transactionhistory']);
      }

    }
    )

  }

  async warningtoast() {
    const toast = await this.toastController.create({
      message: 'Transaction Deleted Successfully',
      duration: 2000,
      position: 'bottom',
      //cssClass: 'warning-toast',
      color: 'danger'
    });
    toast.present();
  }

  loadMoreTransactions(event: any) {
    // Logic to load more transactions when scrolling (if applicable)
    // For example, fetch more transactions and push them into the transactions array
    // EnreqBody: { name: any; relationToUser: any; mobileNo: any; }, uri: stringname: any; relationToUser: any; mobileNo: any; }, uri: stringname: any; relationToUser: any; mobileNo: any; }, uri: stringname: any; relationToUser: any; mobileNo: any; }, uri: stringl event.target.complete() when done loading more data
  }
  navigateToTransactionEntry() {
    this.router.navigate(['/dashboard/transactionentry']); // Replace '/transaction-entry' with the actual route path
  }
  deleteTransaction(transactionId: any) {
    this.utilService.callDeleteApi(`transaction/transactionlist/${transactionId}`).subscribe(async result => {
      if (result.flag) {
        this.warningtoast();
      }
    }
    )
  }
}
