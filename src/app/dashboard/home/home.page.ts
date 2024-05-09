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
  isMonth:any;
  isYear:any;
myDate: any;
  monthlyexpense: any;
  monthlyincome: any;
  monthlybalance: any;

  constructor(private utilService: UtilService) {}

  ngOnInit() {
    this.totalIncome();
    this.overallBalance();
  }

  overallBalance(){
    this.utilService.callGetApi('dashboardbalance/getoverallbalance').subscribe(result =>{
      if(result.flag){
        this.balanceAmount = result.data.balanceAmount;
      }
    })
  }

  monthlyBalance(){
    this.utilService.callGetApi('dashboardbalance/getmonthlybalance').subscribe(result =>{
      if(result.flag){
        this.monthlybalance = result.data.balance;
        this.monthlyexpense = result.data.expense;
        this.monthlyincome = result.data.income;
      }
    })
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

  isSelectMonth: any;
  isSelectYear: any;

  ongetMY(event: any){  
    this.isSelectMonth = event.detail.value;
  }

  ongetY(event: any){  
    this.isSelectYear = event.detail.value;
  }

  handleMonthYearChange(event: CustomEvent) {
    // Get the selected month and year from the event detail
    const selectedDate: string = event.detail.value;
    
    // Do something with the selected date
    console.log("Selected month and year:", selectedDate);
    // You can perform any other action you need with the selected month and year
}


  totalIncome() {
    // debugger
    // // Constructing the request body
    // let reqBody = {
    //   totalincome: this.totalincome,
    //   totalexpense: this.totalexpense,
    //   balance: this.balance,
    // };

    // // Making a POST request to the API endpoint
    // this.utilService.callPostApi(reqBody, 'transaction/transactionlist').subscribe(result => {
    //   if (result.flag) {
    //     // Assigning different values from the response to each property
    //     this.totalincome = result.totalincome;
    //     this.totalexpense = result.totalexpense;
    //     this.balance = result.balance;
    //   }
    // });
  }
}
