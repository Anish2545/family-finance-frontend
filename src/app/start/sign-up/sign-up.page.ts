import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/util.service';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { getAuth } from 'firebase/auth';
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
    private utilService: UtilService
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
  disabledVerifyBtn: boolean = true;
  otp: string[] = [];
  closeResult = '';
  otpForm = new FormGroup({});
  user: any;

  routerlink = '';

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
      this.utilService.validateAllFormFields(this.form);
      return;
    }

    let reqBody = {
      mobileNo: this.form.controls["phone"].value
    };

    this.utilService.showLoading();
    this.utilService.callFormPostApi(reqBody, "user/check-signup-mobile-no").subscribe(result => {
      if (result.flag) {
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
            this.utilService.hideLoading();
          })
          .catch((error) => {
            if (error) {
              console.log(error);
            } else {
              console.log('ALL GOOD.');
            }
            this.utilService.hideLoading();
          });
      } else {
        this.utilService.toastError("This number already exists");
        this.utilService.hideLoading();
      }
    });
  }

  verifyOTP() {
    if (!this.otp || this.otp.length < 6) {
      this.utilService.toastError("Enter OTP");
      return;
    } else {
      this.utilService.showLoading();
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
              this.utilService.toastSuccess("Successfully Registered");
              await Preferences.set({ key: 'access_token', value: result.data.token });
              this.router.navigate(['/start/otpverify2']);
            } else {
              this.utilService.toastError("");
            }
            this.utilService.hideLoading();
          })
        } else {
          this.utilService.hideLoading();
        }
      });
    }
  }

  onOtpChange(otp: any) {
    this.otp = otp;
    if (otp.length === 6) {
      this.disabledVerifyBtn = false;
    } else {
      this.disabledVerifyBtn = true;
    }
  }
}
