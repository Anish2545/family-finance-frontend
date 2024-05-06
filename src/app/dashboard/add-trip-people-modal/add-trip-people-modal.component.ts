import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/util.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-trip-people-modal',
  templateUrl: './add-trip-people-modal.component.html',
  styleUrls: ['./add-trip-people-modal.component.scss'],
})
export class AddTripPeopleModalComponent implements OnInit {

  @Input() tripId: any;
  addPeopleForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private utilService: UtilService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.addPeopleForm = this.formBuilder.group({
      phone: ['', Validators.required],
    });
  }

  back() {
    this.modalController.dismiss(null, 'back');
  }

  cancel() {
    if (this.addPeopleForm) {
      this.addPeopleForm.reset();
    }
  }

  confirm() {
    if (this.addPeopleForm && this.addPeopleForm.valid) {
      let reqBody = {
        phone: this.addPeopleForm.get('phone')?.value,
        tripId: this.tripId,
      };
      this.utilService.callFormPostApi(reqBody, 'tripexpense/addtrippeople').subscribe(
        async (result: any) => {
          if (result.flag) {
            this.successtoast();
            await this.modalController.dismiss(this.addPeopleForm.value, 'confirm');
          } else {
            this.warningtoast();
          }
        },
      );
      console.log(this.addPeopleForm.value);
      // Reset the form after successful submission
      this.cancel();
    } else {
      this.warningtoast();
    }
  }

  async warningtoast() {
    const toast = await this.toastController.create({
      message: 'Phone Number is required.',
      duration: 2000,
      position: 'bottom',
      color: 'danger'
    });
    toast.present();
  }

  async successtoast() {
    const toast = await this.toastController.create({
      message: 'Entry Added',
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }
}
