import { Component, OnInit, Input } from '@angular/core';
import { UtilService } from 'src/app/util.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { IonInfiniteScrollCustomEvent } from '@ionic/core';
import { ToastController } from "@ionic/angular";
import { AddExpenseModalComponent } from '../add-expense-modal/add-expense-modal.component';
import { AddTripPeopleModalComponent } from '../add-trip-people-modal/add-trip-people-modal.component';

@Component({
  selector: 'app-view-trip-expense-modal',
  templateUrl: './view-trip-expense-modal.component.html',
  styleUrls: ['./view-trip-expense-modal.component.scss'],
})
export class ViewTripExpenseModalComponent implements OnInit {
  
  @Input() title:any;
  @Input() tripId: any;
  tripexpense: any;
  trip: any;
  addExpenseForm: any;
  addPeopleForm: any;

  constructor(private modalController: ModalController,private toastController: ToastController, private utilService: UtilService, private formBuilder: FormBuilder) {
    this.addExpenseForm = this.formBuilder.group({
      amount: ['', Validators.required],
      description: ['', Validators.required]
    })
    this.fetchTrips()
  }

  ngOnInit() {
    console.log("Trip ID:", this.tripId);
    this.fetchTrips()
  }

  async openExpenseModal(tripId: any) {
    const modal = await this.modalController.create({
      component: AddExpenseModalComponent, // The component that represents your expense form
      componentProps: {
        addExpenseForm: this.addExpenseForm,
        tripId: tripId, // Pass your form group as a property to the modal
      }
    });
    return await modal.present();
  }

  async openPeopleModal(tripId: any) {
    const modal = await this.modalController.create({
      component: AddTripPeopleModalComponent, // The component that represents your expense form
      componentProps: {
        addPeopleForm: this.addPeopleForm,
        tripId: tripId, // Pass your form group as a property to the modal
      }
    });
    return await modal.present();
  }

  back() {
    this.modalController.dismiss(null, 'back');
  }

  fetchTrips() {
    console.log(this.tripId);
    if (this.tripId) {
      this.utilService.callGetApi(`tripexpenseamount/gettriplistexpense/${this.tripId}`).subscribe(async result => {
        if (!result.data || result.data.length === 0){
          this.warningtoast();
        }
        else{
          this.tripexpense = result.data;
          this.successtoast();
        }
      })
    }
  }

  async warningtoast() {
    const toast = await this.toastController.create({
      message: 'No Data Found',
      duration: 1000,
      position: 'bottom',
      //cssClass: 'warning-toast',
      color: 'danger'
    });
    toast.present();
  }

  async successtoast() {
    const toast = await this.toastController.create({
      message: 'Data Loaded',
      duration: 1000,
      position: 'bottom',
      // cssClass: 'green-toast',
      color: 'success'
    });
    toast.present();
  }

  deleteExpense(tripexpenseId: any) {
    this.utilService.callDeleteApi(`tripexpenseamount/gettriplistexpense/${tripexpenseId}`).subscribe(async result => {
      if (result.flag) {
        this.deletetoast();
      }
    }
    )
  }

  async deletetoast() {
    const toast = await this.toastController.create({
      message: 'Expense Deleted Successfully',
      duration: 2000,
      position: 'bottom',
      //cssClass: 'warning-toast',
      color: 'danger'
    });
    toast.present();
  }
}
