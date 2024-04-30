/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OverlayEventDetail } from '@ionic/core/components';
import { Router } from '@angular/router';
import { AddTripModalComponent } from '../add-trip-modal/add-trip-modal.component';
import { UtilService } from 'src/app/util.service';


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

  trips: any;

  constructor(private modalController: ModalController,private utilService: UtilService, private formBuilder: FormBuilder, private router: Router) {
    this.addTripForm = this.formBuilder.group({
      title: ['', Validators.required],
      date: ['', Validators.required]
    });
    this.fetchTrips();
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: AddTripModalComponent,
      componentProps: {
        addTripForm: this.addTripForm
      }
    });
    await modal.present();
  }

  ngOnInit() {
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

    }
    )

  }

  loadMoreTrips(event: any) {
    // Logic to load more transactions when scrolling (if applicable)
    // For example, fetch more transactions and push them into the transactions array
    // EnreqBody: { name: any; relationToUser: any; mobileNo: any; }, uri: stringname: any; relationToUser: any; mobileNo: any; }, uri: stringname: any; relationToUser: any; mobileNo: any; }, uri: stringname: any; relationToUser: any; mobileNo: any; }, uri: stringl event.target.complete() when done loading more data
  }
}
