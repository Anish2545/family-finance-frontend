import { Component } from '@angular/core';
import { UtilService } from 'src/app/util.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  {
  totalincome: any;
  totalexpense: any;
  balance: any;
  constructor(private utilService: UtilService) {
    this.totalIncome()
    }

  totalIncome() {
    let reqBody = {
      totalincome: this.totalincome,
      totalexpense: this.totalexpense,
      balance:this.balance,
    }
    this.utilService.callPostApi(reqBody, 'transaction/transactionlist').subscribe(async result => {
      if (result.flag) {
        this.totalincome = result.data;
        this.totalexpense = result.data;
        this.balance = result.data ;
      }
    })
  }
}