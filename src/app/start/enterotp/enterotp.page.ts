import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterotp',
  templateUrl: './enterotp.page.html',
  styleUrls: ['./enterotp.page.scss'],
})
export class EnterotpPage implements OnInit {

  constructor() { }

  ngOnInit() {""
  }

  // Method to handle OTP changes
  onOtpChange(event: any) {
    console.log('OTP changed:', event);
    // You can add your logic here to handle OTP changes
  }

}
