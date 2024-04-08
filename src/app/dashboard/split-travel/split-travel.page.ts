import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-split-travel',
  templateUrl: './split-travel.page.html',
  styleUrls: ['./split-travel.page.scss'],
})
export class SplitTravelPage implements OnInit {
  form:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      destination: ['', Validators.required],
      noOfPersons: [0, Validators.required],
      personname: ['',Validators.required],
      travelexpense: [0,Validators.required],
    });
   }

  ngOnInit() {
    ""
    // You can perform any initialization logic here
    // For example, you might want to pre-fill some form fields or fetch initial data from a server
    // Here's an example of how you might pre-fill the 'name' field:
    // this.form.patchValue({
    //   name: 'John Doe'
    // });
  }

  save() {
    if (this.form.valid) {
      // If the form is valid, you can save the input fields
      const formData = this.form.value;
      // Here, you can send the formData to your backend or perform any other action to save the data
      console.log('Form data:', formData);
      // Optionally, you can reset the form after saving
      this.form.reset();
    } else {
      // If the form is not valid, you can display an error message or handle it accordingly
      console.log('Form is not valid. Please fill in all required fields.');
    }
  }

}
