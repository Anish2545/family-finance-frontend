import { Component, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilService } from 'src/app/util.service';
import { ModalController } from '@ionic/angular';
import { IonInfiniteScrollCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-add-expense-modal',
  templateUrl: './add-expense-modal.component.html',
  styleUrls: ['./add-expense-modal.component.scss'],
})
export class AddExpenseModalComponent {
  @Input() addExpenseForm!: FormGroup;
  @Input() id: any;
  markFormGroupTouched: any;
  tripexpense: any;
  tripid: any;
  constructor(private formBuilder: FormBuilder, private modalController: ModalController, private actRoute: ActivatedRoute,private utilService: UtilService, private toastController: ToastController, private router: Router) {
    this.addExpenseForm = this.formBuilder.group({
      amount: ['', Validators.required],
      description: ['', Validators.required]
    })
    this.tripid = this.actRoute.snapshot.params['tripid']
    this.fetchTrips();
  }
  cancel() {
    // this.modalController.dismiss(null, 'cancel');
    this.addExpenseForm.reset();
  }

  back(){
    this.modalController.dismiss(null, 'back');
  }
    
  confirm() {
    debugger;
    if (this.addExpenseForm.valid) {
      let reqBody = {
        amount: this.addExpenseForm.controls['amount'].value,
        description: this.addExpenseForm.controls['description'].value,
        tripId: this.id,
      };
      this.utilService.callFormPostApi(reqBody, 'tripexpenseamount/addtripexpense').subscribe(
        async (result: any) => {
          if (result.flag) {
            this.successtoast();
            this.loadMoreTrips(result.flag);
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

  fetchTrips() { 
    console.log(this.tripid);
    this.utilService.callGetApi("tripexpenseamount/gettriplistexpense/${this.tripid}").subscribe(async result => {
      if (result.flag) {
        this.tripexpense = result.data;
        //this.router.navigate(['/dashboard/transactionhistory']);
      }

    }
    )

  }

  loadMoreTrips(event: any) {
    this.fetchTrips();
  }

}





