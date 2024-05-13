import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  totalincome: any;
  totalexpense: any;
  balanceAmount: any;
  expense: any;
  income: any;
  balance: any;
  isSelectMonth: any = new Date().toLocaleString('default', { month: 'long' });
  isSelectYear: any = new Date().getFullYear().toString();

  constructor(private utilService: UtilService) { }

  ngOnInit() {
    this.overallBalance();
    this.monthlyBalance();
  }

  overallBalance() {
    this.utilService.callGetApi('dashboardbalance/getoverallbalance').subscribe(result => {
      if (result.flag) {
        this.balanceAmount = result.data.balanceAmount;
      }
    })
  }

  monthlyBalance() {
    if (this.isSelectMonth && this.isSelectYear) {
      let reqbody = {
        month: this.isSelectMonth,
        year: this.isSelectYear
      };
      this.utilService.callPostApi(reqbody, 'dashboardbalance/getmonthlybalance').subscribe(result => {
        if (result.flag) {
          this.balance = result.data.balance;
          this.expense = result.data.expense;
          this.income = result.data.income;
        }
      })
    }
  }

  // monthlyIncome(){
  //   this.utilService.callGetApi('dashboardbalance/getmonthlyincome').subscribe(result =>{
  //     if(result.flag){
  //       this.monthlyincome = result.data.income;
  //     }
  //   })
  // }

  // monthlyExpense(){
  //   this.utilService.callGetApi('dashboardbalance/getmonthlyexpense').subscribe(result =>{
  //     if(result.flag){
  //       this.monthlyexpense = result.data.expense;
  //     }
  //   })
  // }



  ongetMY(event: any) {
    this.isSelectMonth = event.detail.value;
    this.monthlyBalance();
  }

  ongetY(event: any) {
    this.isSelectYear = event.detail.value;
    console.log(this.isSelectYear);
    this.monthlyBalance();
  }



  // totalIncome() {
  //   // debugger
  //   // // Constructing the request body
  //   // let reqBody = {
  //   //   totalincome: this.totalincome,
  //   //   totalexpense: this.totalexpense,
  //   //   balance: this.balance,
  //   // };

  //   // // Making a POST request to the API endpoint
  //   // this.utilService.callPostApi(reqBody, 'transaction/transactionlist').subscribe(result => {
  //   //   if (result.flag) {
  //   //     // Assigning different values from the response to each property
  //   //     this.totalincome = result.totalincome;
  //   //     this.totalexpense = result.totalexpense;
  //   //     this.balance = result.balance;
  //   //   }
  //   // });
  // }
}
