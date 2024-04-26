import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  form: FormGroup; // Declare form as a FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      profession: [''],
      gender: [''],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {""
    // You can perform any initialization logic here
    // For example, you might want to pre-fill some form fields or fetch initial data from a server
    // Here's an example of how you might pre-fill the 'name' field:
    // this.form.patchValue({
    //   name: 'John Doe'
    // });
  };

  logout() {
    
    console.log("Logging out...");
  }
}
