import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  form!: FormGroup;
  type: boolean = true;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  changeType() {
    this.type = !this.type;
  }


  signUp() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    
     this.router.navigate(['/login']);
    console.log(this.form.value);
  }
}
