import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/util.service';
import { ToastController } from '@ionic/angular';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { getAuth } from 'firebase/auth';
import { CountdownComponent } from 'ngx-countdown';
import { Plugins } from '@capacitor/core';

const app = firebase.initializeApp(environment.firebaseConfig);
const auth = getAuth(app);
const { Preferences } = Plugins;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  form!: FormGroup;
  type: boolean = true;

  isOTPVerification: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private utilService: UtilService,
    private toastController: ToastController // Inject ToastController
  ) { }

  otpVerificationMode: string = 'mobile';
  MobileNo: string = '';
  labelMobileNo: string = '';
  preFixMobileNo: string = '';
  confirmationResult: any;
  reCaptchaVerifier: any;
  recaptchaVerifier: any;
  isLoginBtnLoading: boolean = false;
  redirectInfoData: any;
  isReloadBtnLoading: boolean = false;
  isVerifyOTPLoading: boolean = false;
  isGoLoginLoading: boolean = false;
  OTP_Verify = false;
  disabled: boolean = true;
  otp: string[] = [];
  closeResult = '';
  otpForm = new FormGroup({});
  user: any;

  routerlink = '';

  isAllowToResendOTP: boolean = false;
  countDownConfig = { leftTime: 300, format: 'mm:ss' };
  @ViewChild('cd', { static: false }) private countdown:
    | CountdownComponent
    | undefined;


  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
    });
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      { size: 'invisible' }
    );
    
  }

  signUp() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    let reqBody = {
      mobileNo: this.form.controls["phone"].value
    };

    this.utilService.callFormPostApi(reqBody, "user/check-mobile-no").subscribe(result => {
      if (result.flag) {
        this.successtoast();
        
        let preFixMobileNo =
          '+91' + (this.form.value['phone'] ?? '').toString();
        firebase
          .auth()
          .signInWithPhoneNumber(preFixMobileNo, this.reCaptchaVerifier)
          .then((confirmationResult) => {
            this.MobileNo = preFixMobileNo;
            this.labelMobileNo =
              'IN +91 *********' + this.MobileNo.substring(8, 10);
            this.preFixMobileNo = preFixMobileNo.toString();
            this.confirmationResult = confirmationResult;
            this.isOTPVerification = true;
          })
          .catch((error) => {
            if (error) {
              console.log(error);
            } else {
              console.log('ALL GOOD.');
            }
          });

      } else {
        this.warningtoast(); // Call the presentToast method to display the toast
      }
    });


  }

 
  verifyOTP() {
    this.isVerifyOTPLoading = true;
    this.confirmationResult.confirm(this.otp).then((user: any) => {
      if (user.user.phoneNumber == this.preFixMobileNo) {
        let reqBody = {
          id_token: user.user.multiFactor.user.accessToken,
          name: this.form.controls["name"].value,
          mobileNo: this.form.controls["phone"].value,
          emailId: this.form.controls["email"].value
        };
        this.utilService.callFormPostApi(reqBody, "user/signup").subscribe(async result => {
          if (result.flag) {
            this.successtoast();
            await Preferences.set({ key: 'access_token', value: result.data.token });
            this.router.navigate(['/start/otpverify2']);
          } else {
            this.warningtoast(); // Call the presentToast method to display the toast
          }
        })
      } else {
        this.isVerifyOTPLoading = false;
        this.routerlink = '/';
      }
    });
  }


  resendOTP() {
    this.isReloadBtnLoading = true;
    firebase
      .auth()
      .signInWithPhoneNumber(this.preFixMobileNo, this.recaptchaVerifier)
      .then((confirmationResult) => {
        this.confirmationResult = confirmationResult;
        this.isReloadBtnLoading = false;
      })
      .catch((err) => {
        this.isReloadBtnLoading = false;
      });
  }

  onOtpChange(otp: any) {
    this.otp = otp;
    if (otp.length === 6) {
      this.disabled = false;
    }
  }

  onTimerFinished(e: any) {
    if (e['action'] == 'start') {
      this.isAllowToResendOTP = false;
    } else if (e['action'] == 'done') {
      this.isAllowToResendOTP = true;
    }
  }


  changeType() {
    this.type = !this.type;
  }

  async warningtoast() {
    const toast = await this.toastController.create({
      message: 'This number already exists',
      duration: 2000,
      position: 'bottom',
      //cssClass: 'warning-toast',
      color: 'danger'
    });
    toast.present();
  }
  async successtoast() {
    const toast = await this.toastController.create({
      message: 'Successfully Registered',
      duration: 2000,
      position: 'bottom',
      // cssClass: 'green-toast',
      color: 'success'
    });
    toast.present();
  }


  async handleGetStarted() {
    this.router.navigateByUrl('/start/otpverify2');
  }
}
