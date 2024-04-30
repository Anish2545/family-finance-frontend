import { Component, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/util.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-trip-modal',
  templateUrl: './add-trip-modal.component.html',
  styleUrls: ['./add-trip-modal.component.scss'],
})
export class AddTripModalComponent {
  @Input()
  addTripForm!: FormGroup;
  markFormGroupTouched: any;

  constructor(private formBuilder: FormBuilder,private modalController: ModalController,private utilService: UtilService,private toastController: ToastController,private router :Router) { 
    this.addTripForm = this.formBuilder.group({
      title: [null,Validators.required], // category: income/expense
      date: [null, Validators.required], // Date of Transaction
    });
   }

  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  confirm() {
    if(this.addTripForm.valid){
      let reqBody = {
        title: this.addTripForm.controls["title"].value,
        transactionDate: this.addTripForm.controls["date"].value,
      };
    this.utilService.callFormPostApi(reqBody, "tripexpense/addtrip").subscribe(async result => {
      if (result.flag) {
        this.successtoast();
        this.modalController.dismiss(this.addTripForm.value, 'confirm');
      } else {
        this.warningtoast(); // Call the presentToast method to display the toast
      }
    })
    // Here you can handle the form submission, for example, sending it to a backend server
    console.log(this.addTripForm.value);
    // Reset the form after submission if needed
    this.addTripForm.reset();
  } else {
    // Mark all fields as touched to display validation messages
    this.markFormGroupTouched(this.addTripForm);
  }
  }

  async warningtoast() {
    const toast = await this.toastController.create({
      message: 'Error baby',
      duration: 2000,
      position: 'bottom',
      //cssClass: 'warning-toast',
      color: 'danger'
    });
    toast.present();
  }

  async successtoast() {
    const toast = await this.toastController.create({
      message: 'Entry Added',
      duration: 2000,
      position: 'bottom',
      // cssClass: 'green-toast',
      color: 'success'
    });
    toast.present();
  }
}
