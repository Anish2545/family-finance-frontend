

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transactionentry',
  templateUrl: './transactionentry.page.html',
  styleUrls: ['./transactionentry.page.scss'],
})
export class TransactionentryPage implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      category: [null, Validators.required], // category: income/expense
      transactionDate: [null, Validators.required], // Date of Transaction
      amount: [null, Validators.required], // Amount
      title: [null, Validators.required], // Title of Transaction
    });
  }

  ngOnInit() {
  }

  submitForm() {
    if (this.form.valid) {
      // Here you can handle the form submission, for example, sending it to a backend server
      console.log(this.form.value);
      // Reset the form after submission if needed
      this.form.reset();
    } else {
      // Mark all fields as touched to display validation messages
      this.markFormGroupTouched(this.form);
    }
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
