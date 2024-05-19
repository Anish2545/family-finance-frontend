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
  settlementList: any;
  constructor(private router: Router, private utilService: UtilService, private toastController: ToastController, private actRoute: ActivatedRoute) {
    this.tripId = this.actRoute.snapshot.params['tripId'];
    this.title = this.actRoute.snapshot.params['title'];
    this.listDetails();
    this.fetchSettlementList();
  }

  back() {
    this.router.navigate(['/dashboard/split-travel-list']);
  }

  fetchSettlementList() {
    if (this.tripId) {
      this.utilService.callGetApi(`tripexpense/fetch-settlement-list/${this.tripId}`).subscribe(async result => {
        if (!result.data || result.data.length === 0) {
        }
        else {
          this.settlementList = result.data;
        }
      })
    }
  }

  listDetails() {
    if (this.tripId) {
      this.utilService.callGetApi(`tripexpense/get-user-contributions/${this.tripId}`).subscribe(async result => {
        if (!result.data || result.data.length === 0) {
        }
        else {
          this.persons = result.data;
        }
      })
    }
  }

  splitAmount() {
    this.utilService.callGetApi(`tripexpense/split-amount/${this.tripId}`).subscribe(
      async (result: any) => {
        if (result.flag) {
          this.utilService.toastSuccess("Amount Splitted");
          this.fetchSettlementList();
        } else {
          this.utilService.toastSuccess("Some Error Occured");
        }
      },
    );
  }

}
