/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OverlayEventDetail } from '@ionic/core/components';
import { Router } from '@angular/router';
import { AddTripModalComponent } from '../add-trip-modal/add-trip-modal.component';
import { AddExpenseModalComponent } from "../add-expense-modal/add-expense-modal.component";
import { UtilService } from 'src/app/util.service';
import { ViewTripExpenseModalComponent } from '../view-trip-expense-modal/view-trip-expense-modal.component';


@Component({
  selector: 'app-split-travel-list',
  templateUrl: './split-travel-list.page.html',
  styleUrls: ['./split-travel-list.page.scss'],
})
export class SplitTravelListPage implements OnInit {
  @ViewChild(IonModal)
  modal!: IonModal;
  title: any;
  message: string | undefined;
  date: any;
  addTripForm!: FormGroup;
  addExpenseForm!: FormGroup;
  totalAmount:any;
  trips: any;

  constructor(private modalController: ModalController, private utilService: UtilService, private formBuilder: FormBuilder, private router: Router) {
    this.addTripForm = this.formBuilder.group({
      title: ['', Validators.required],
      date: ['', Validators.required]
    });
    this.addExpenseForm = this.formBuilder.group({
      amount: ['', Validators.required],
      description: ['', Validators.required]
    })
    this.fetchTrips();
    this.totalamount();
  }

  async opentripModal() {
    const modal = await this.modalController.create({
      component: AddTripModalComponent,
      componentProps: {
        addTripForm: this.addTripForm
      }
    });
    await modal.present();
  }

  async viewtripexpenseModal(tripId: any,title:any) {
    const modal = await this.modalController.create({
      component: ViewTripExpenseModalComponent,
      componentProps: {
        tripId: tripId,
        title:title,
      }
    });
    await modal.present();
  }

  // async openexpenseModal(tripId: any) { 
  //   const modal = await this.modalController.create({
  //     component: AddExpenseModalComponent,
  //     componentProps: {
  //       addExpenseForm: this.addExpenseForm,
  //       id: tripId,
  //     }
  //   });
  //   await modal.present();
  // }

  // async openexpenseModal(tripId: any) {
  //   const modal = await this.modalController.create({
  //     component: AddExpenseModalComponent,
  //     componentProps: {
  //       addExpenseForm: this.addExpenseForm,
  //       tripId: tripId, // Pass tripId as component prop
  //     }
  //   });
  //   await modal.present();
  // }

  ngOnInit() {
  }

  openSplitPage(tripId: any,title:any){
    this.router.navigate(['/dashboard/split-travel-list/split-amount', tripId,title])
  }

  fetchTrips() {
    let reqBody = {
      first: 0,
      rows: 10

    };
    this.utilService.callPostApi(reqBody, "tripexpense/gettriplist").subscribe(async result => {
      if (result.flag) {
        this.trips = result.data;
        //this.router.navigate(['/dashboard/transactionhistory']);
      }
    })
  }

  totalamount(){
    let reqBody = {
      totalAmount:this.totalAmount,
    }
    this.utilService.callPostApi(reqBody,'tripexpenseamount/addtripexpense').subscribe(async result =>{
      if(result.flag){
        this.totalAmount=result.data;
      }
    })
  }


  loadMoreTrips(event: any) {
    this.fetchTrips();
    // Logic to load more transactions when scrolling (if applicable)
    // For example, fetch more transactions and push them into the transactions array
    // EnreqBody: { name: any; relationToUser: any; mobileNo: any; }, uri: stringname: any; relationToUser: any; mobileNo: any; }, uri: stringname: any; relationToUser: any; mobileNo: any; }, uri: stringname: any; relationToUser: any; mobileNo: any; }, uri: stringl event.target.complete() when done loading more data
  }

}
