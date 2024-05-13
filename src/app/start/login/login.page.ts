import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';// import firebase from 'firebase/compat/app';
import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { CountdownComponent } from 'ngx-countdown';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/util.service';
import { ToastController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

const app = firebase.initializeApp(environment.firebaseConfig);
const auth = getAuth(app);
const { Preferences } = Plugins;


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form!: FormGroup;
  type: boolean = true;
  isOTPVerification: boolean = false;
  MobileNo: string = '';
  labelMobileNo: string = '';
  preFixMobileNo: string = '';
  confirmationResult: any;
  reCaptchaVerifier: any;
  isReloadBtnLoading: boolean = false;
  isVerifyOTPLoading: boolean = false;
  isGoLoginLoading: boolean = false;
  OTP_Verify = false;
  disabledVerifyOTPBtn: boolean = true;
  otp: string[] = [];
  closeResult = '';
  otpForm = new FormGroup({});
  user: any;

  routerlink = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private utilService: UtilService
  ) { }


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
    if (!this.form.valid) {
      this.utilService.validateAllFormFields(this.form);
      return
    } else {

      let reqBody = {
        mobileNo: this.form.controls["phone"].value
      };

      this.utilService.callFormPostApi(reqBody, "user/check-mobile-no").subscribe(result => {
        if (result.flag) {
          this.utilService.showLoading();
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
          this.utilService.toastError("Mobile no not registered");
        }
      });
    }
  }

  verifyOTP() {
    if (!this.otp || this.otp.length < 6) {
      this.utilService.toastError("Enter OTP");
      return;
    } else {
      this.utilService.showLoading();
      this.confirmationResult.confirm(this.otp).then(async (user: any) => {
        if (user.user.phoneNumber == this.preFixMobileNo) {
          let reqBody = {
            id_token: user.user.multiFactor.user.accessToken,
            mobileNo: this.preFixMobileNo.replace("+91", ""),
          };
          this.utilService.callFormPostApi(reqBody, "user/signin").subscribe(async result => {
            if (result.flag) {
              await Preferences.set({ key: 'access_token', value: result.data.token });
              this.router.navigate(['/dashboard']);
            } else {
              this.utilService.toastError("Invalid User"); // Call the presentToast method to display the toast
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
      this.disabledVerifyOTPBtn = false;
    } else {
      this.disabledVerifyOTPBtn = true;
    }
  }

  onClickSignUp() {
    this.router.navigate(['/start/sign-up']);
  }
}