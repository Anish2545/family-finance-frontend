import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/util.service';
import { ToastController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

const { Preferences } = Plugins;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  form: any; // Declare form as a FormGroup
  userName: string = "";

  constructor(private formBuilder: FormBuilder, private router: Router, private utilService: UtilService,
    private toastController: ToastController) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      profession: ['', Validators.required,],
      gender: ['', Validators.required,],
      email: ['', [Validators.required, Validators.email]]
    })

  }

  ngOnInit() {
    this.loadUserData();
    // You can perform any initialization logic here
    // For example, you might want to pre-fill some form fields or fetch initial data from a server
    // Here's an example of how you might pre-fill the 'name' field:
    // this.form.patchValue({
    //   name: 'John Doe'
    // });
  };

  async successtoast() {
    const toast = await this.toastController.create({
      message: 'Profile Updated',
      duration: 2000,
      position: 'bottom',
      // cssClass: 'green-toast',
      color: 'success'
    });
    toast.present();
  }

  loadUserData() {
    this.utilService.callGetApi("user/profile").subscribe(async result => {
      if (result.flag) {
        this.userName = result.data.name;
      }
      this.form.patchValue({
        name: result.data.name,
        phone: result.data.mobileNo,
        profession: result.data.occupation,
        gender: result.data.gender,
        email: result.data.emailId,

      });
    })
  }


  updateprofile() {
    if (this.form.valid) {
      let reqBody = {
        name: this.form.controls["name"].value,
        mobileNo: this.form.controls["phone"].value,
        occupation: this.form.controls["profession"].value,
        gender: this.form.controls["gender"].value,
        emailId: this.form.controls["email"].value,
      };


      this.utilService.callPostApi(reqBody, "user/updateprofile").subscribe(async result => {
        if (result.flag) {
          this.successtoast();
          this.loadUserData();
          //this.router.navigate(['/lace/add-purchase', resp.data.purchaseId]);
        }

      })

    }
  }

  logout() {
    Preferences.remove({ key: 'access_token' });
    Preferences.remove({ key: 'u' });
    this.router.navigate(['/start/login']);
    console.log("Logging out...");
  }
}
