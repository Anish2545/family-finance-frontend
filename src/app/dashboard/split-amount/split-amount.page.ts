import { Component, Input, OnInit } from '@angular/core';
import { UtilService } from 'src/app/util.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-split-amount',
  templateUrl: './split-amount.page.html',
  styleUrls: ['./split-amount.page.scss'],
})
export class SplitAmountPage {

  title: any;
  tripId: any;
  persons: any;
  constructor(private router: Router, private utilService: UtilService, private toastController: ToastController, private actRoute: ActivatedRoute) {
    this.tripId = this.actRoute.snapshot.params['tripId'];
    this.title = this.actRoute.snapshot.params['title'];
    this.listDetails();
  }

  back() {
    this.router.navigate(['/dashboard/split-travel-list']);
  }

  listDetails() {
    if (this.tripId) {
      this.utilService.callGetApi(`tripexpense/gettrippeoplelist/${this.tripId}`).subscribe(async result => {
        if (!result.data || result.data.length === 0) {
          this.warningtoast();
        }
        else {
          this.persons = result.data;
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

}
