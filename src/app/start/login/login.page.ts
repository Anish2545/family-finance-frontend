import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form!: FormGroup;
  type:boolean=true;

  constructor() { }

  ngOnInit() {
    this.form=new FormGroup({
      phone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
      })
  })

}

changeType() {
  this.type = !this.type;
}

logIn() {
  if(!this.form.valid) {
    this.form.markAllAsTouched();
    return;
  }
  console.log(this.form.value);
}
}
