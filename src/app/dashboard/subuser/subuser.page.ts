import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      relation: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
}