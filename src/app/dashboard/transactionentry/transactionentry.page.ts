import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/util.service';
@Component({
  selector: 'app-transactionentry',
  templateUrl: './transactionentry.page.html',
  styleUrls: ['./transactionentry.page.scss'],
})
export class TransactionentryPage {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private utilService: UtilService,
    private toastController: ToastController, private router: Router) {
    this.form = this.formBuilder.group({
      category: [null,Validators.required], // category: income/expense
      transactionDate: [null, Validators.required], // Date of Transaction
      amount: [null, Validators.required], // Amount
      expensecategory: [{ value: 'income', disabled: true }, Validators.required], // Title of Transaction
    });
    this.form.get('category')?.valueChanges.subscribe(value => {
      const expenseCategoryControl = this.form.get('expensecategory');
      if (value === 'expense') {
        expenseCategoryControl?.enable();
      } else {
        expenseCategoryControl?.setValue('income');
        expenseCategoryControl?.disable();
      }
    });
  }


  submitForm() {
    if (this.form.valid) {
      let reqBody = {
        isIncome: this.form.controls["category"].value,
        transactionDate: this.form.controls["transactionDate"].value,
        amount: this.form.controls["amount"].value,
        expenseCategory: this.form.controls["expensecategory"].value,

      };
      this.utilService.callFormPostApi(reqBody, "transaction/addtransaction").subscribe(async result => {
        if (result.flag) {
          this.successtoast();
          this.router.navigate(['dashboard/transactionhistory']);
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
