import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/util.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-subuser',
  templateUrl: './subuser.page.html',
  styleUrls: ['./subuser.page.scss'],
})
export class SubuserPage implements OnInit {
  saveForm() {
    throw new Error('Method not implemented.');
  }
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private utilService: UtilService,
    private toastController: ToastController, private router: Router) {
      this.form = this.formBuilder.group({
        name: [null, Validators.required], // name
        relation: [null, Validators.required], // relation
        phone: [null, Validators.required], // mobileno
      });
  }

  ngOnInit() {
  }
 
  submitForm() {
    if (this.form.valid) {
      let reqBody = {
        name: this.form.controls["name"].value,
        relationToUser: this.form.controls["relation"].value,
        mobileNo: this.form.controls["phone"].value,
        
      };
      this.utilService.callFormPostApi(reqBody, "subuser/addsubuser").subscribe(async result => {
        if (result.flag) {
          this.successtoast();
          this.router.navigate(['/dashboard/transaction']);
        } else {
          this.warningtoast(); // Call the presentToast method to display the toast
        }
      })
      // Here you can handle the form submission, for example, sending it to a backend server
      console.log(this.form.value);
      // Reset the form after submission if needed
      this.form.reset();
    } else {
      // Mark all fields as touched to display validation messages
      this.markFormGroupTouched(this.form);
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

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
