import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilService } from 'src/app/util.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-expense-modal',
  templateUrl: './add-expense-modal.component.html',
  styleUrls: ['./add-expense-modal.component.scss'],
})
export class AddExpenseModalComponent implements OnInit {
  @Input() addExpenseForm!: FormGroup;
  @Input() tripId: any;
  markFormGroupTouched: any;
  tripexpense: any;
  trip: any;
  totalAmount: any;
  constructor(private formBuilder: FormBuilder, private modalController: ModalController, private actRoute: ActivatedRoute, private utilService: UtilService, private toastController: ToastController, private router: Router) {
    this.addExpenseForm = this.formBuilder.group({
      amount: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  ngOnInit() {
    console.log("Trip ID:", this.tripId);
  }

  cancel() {
    // this.modalController.dismiss(null, 'cancel');
    this.addExpenseForm.reset();
  }

  back() {
    this.modalController.dismiss(null, 'back');
  }

  confirm() {
    if (this.addExpenseForm.valid) {
      let reqBody = {
        amount: this.addExpenseForm.controls['amount'].value,
        description: this.addExpenseForm.controls['description'].value,
        tripId: this.tripId,
        totalAmount:this.totalAmount
      };
      this.utilService.callFormPostApi(reqBody, 'tripexpenseamount/addtripexpense').subscribe(
        async (result: any) => {
          if (result.flag) {
            this.successtoast();
            await this.modalController.dismiss(this.addExpenseForm.value, 'confirm');
          } else {
            this.warningtoast();
          }
        },
      );
      console.log(this.addExpenseForm.value);
      // Reset the form after submission if needed
      this.addExpenseForm.reset();
    } else {
      this.markFormGroupTouched(this.addExpenseForm);
    }
  }


  async warningtoast() {
    const toast = await this.toastController.create({
      message: 'Error',
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





