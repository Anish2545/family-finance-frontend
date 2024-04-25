import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/util.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage {
  items: any[] = []; // Array to hold user data
  currentPage = 1; // Track current page of data
  totalPages = 5; // Assuming there are 5 pages of data in total
  subuser: any;

  constructor(private router: Router, private utilService: UtilService,
    private toastController: ToastController) {
    // Load initial user data
      
    this.loadUserData();}

  // Method to load user data
  loadUserData() {
    // Simulate fetching user data from API
    // Replace this with actual API call to fetch user data
    let reqBody = {
      first: 0, 
      rows :10
 
     };
     this.utilService.callPostApi(reqBody, "subuser/getsubuserlist").subscribe(async result => {
       if (result.flag) {
         this.subuser = result.data;
         //this.router.navigate(['/dashboard/transaction']);
       } 
         
       }
     )
  }
  loadMoreTransactions(event: any) {
    // Logic to load more transactions when scrolling (if applicable)
    // For example, fetch more transactions and push them into the transactions array
    // EnreqBody: { name: any; relationToUser: any; mobileNo: any; }, uri: stringname: any; relationToUser: any; mobileNo: any; }, uri: stringname: any; relationToUser: any; mobileNo: any; }, uri: stringname: any; relationToUser: any; mobileNo: any; }, uri: stringl event.target.complete() when done loading more data
  }
  // Method to handle infinite scroll event
  //onIonInfinite(event: any) {
    // Simulate loading more data with a delay
    //setTimeout(() => {
      //this.currentPage++;
      //if (this.currentPage <= this.totalPages) {
        //this.loadUserData();
       // event.target.complete(); // Complete the infinite scroll event
      //} else {
     //   event.target.disabled = true; // Disable infinite scroll if all data is loaded
   //   }
    //}, 1000); // Adjust delay as needed
 // }

  // Method to navigate to SubuserPage
  navigateToSubuserPage() {
    this.router.navigate(['/dashboard/subuser']); // Replace '/subuser' with the actual route path
  }
}
