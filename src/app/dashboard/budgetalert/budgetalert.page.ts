import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormGroup and FormBuilder

@Component({
  selector: 'app-budgetalert',
  templateUrl: './budgetalert.page.html',
  styleUrls: ['./budgetalert.page.scss'],
})
export class BudgetalertPage implements OnInit {
  form: FormGroup; // Declare form property of type FormGroup
save: any;
cancel: any;

  constructor(private formBuilder: FormBuilder) { // Inject FormBuilder in the constructor
    this.form = this.formBuilder.group({ // Initialize form in the constructor
      category: ['', Validators.required], // Add category form control with required validator
      budget: ['', Validators.required] // Add budget form control with required validator
    });
  }

  ngOnInit() {
    // Initialization logic if needed
  }
}


