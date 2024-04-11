import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';// import firebase from 'firebase/compat/app';
import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { CountdownComponent } from 'ngx-countdown';
import { Router } from '@angular/router';

const app = firebase.initializeApp(environment.firebaseConfig);
const auth = getAuth(app);


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form!: FormGroup;
  type: boolean = true;

  otpVerificationMode: string = 'mobile';
  MobileNo: string = '';
  labelMobileNo: string = '';
  preFixMobileNo: string = '';
  confirmationResult: any;
  reCaptchaVerifier: any;
  recaptchaVerifier:any;
  isOTPVerficiation: boolean = false;
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


  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      { size: 'invisible' }
    );
  }

  onSubmitLoginForm() {
    if (this.form.valid) {
      this.otpVerificationMode = 'mobile';

      let preFixMobileNo =
        '+91' + (this.form.value['phone'] ?? '').toString();
      firebase
        .auth()
        .signInWithPhoneNumber(preFixMobileNo, this.reCaptchaVerifier)
        .then((confirmationResult) => {
          this.MobileNo = this.preFixMobileNo;
          this.labelMobileNo =
            'IN +91 *********' + this.MobileNo.substring(8, 10);
          this.preFixMobileNo = preFixMobileNo.toString();
          this.confirmationResult = confirmationResult;
          this.isOTPVerficiation = true;
          this.isLoginBtnLoading = true;
          console.log(this.confirmationResult);
        })
        .catch((error) => {
          if (error) {
            console.log(error);
          } else {
            console.log('ALL GOOD.');
            this.isLoginBtnLoading = true;
          }
        });
    }
  }

  verifyOTP() {
    console.log(this.otp);
    console.log(this.confirmationResult);

    this.isVerifyOTPLoading = true;

    this.confirmationResult.confirm(this.otp).then((user: any) => {
      if (user.user.phoneNumber == this.preFixMobileNo) {
        let reqBody = {
          id_token: user.user.multiFactor.user.accessToken,
          LoginId: this.MobileNo,
          loginMode: 'loginWithMobileNo',
        };
        this.routerlink = '/start/otpverify2';
        this.isOTPVerficiation = true;
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
    if (otp.length === 4) {
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

  logIn() {
    if (!this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.router.navigate(['/enter-otp']);
    console.log(this.form.value);
  }
}
