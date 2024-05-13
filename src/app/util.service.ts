import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  serverBaseurl = environment.serverBaseurl;

  constructor(private http: HttpClient,
    private toastController: ToastController,
    private loadingCtrl: LoadingController) { }

  Validators: any;

  url = environment.serverURL;

  subscribe(arg0: (resp: any) => void) {
    throw new Error('Method not implemented.');
  }

  callPostApi(body: any, apiroute: string): Observable<any> {
    return this.http.post<any>(this.url + apiroute, body);
  }

  callGetApiWithId(params: any, apiroute: string): Observable<any> {
    return this.http.get<any>(this.url + apiroute, params);
  }

  callDeleteApi(apiroute: string): Observable<any> {
    return this.http.delete<any>(this.url + apiroute);
  }

  validateAllFormFields(formGroup: FormGroup) {
    //{1}
    Object.keys(formGroup.controls).forEach((field) => {
      //{2}
      const control = formGroup.get(field); //{3}
      if (control instanceof FormControl) {
        //{4}
        control.markAsTouched({ onlySelf: true });
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        //{5}
        this.validateAllFormFields(control); //{6}
      }
    });
  }

  // callPostPromise(apiroute: string, params: any): Promise<any> {
  //   return this.http
  //     .post(this.url + apiroute, params)
  //     .toPromise()
  //     .then((res) => res)
  //     .then((data) => {
  //       return data;
  //     });
  // }

  callFormPostApi(params: any, apiroute: string): Observable<any> {
    return this.http.post(this.url + apiroute, params);
  }

  callGetApi(uri: string): Observable<any> {
    return this.http.get<any>(this.url + uri);
  }

  callImageGet(imageUrl: string): Observable<any> {
    const headers = {
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Content-Type': '*',
    };
    return this.http.get<any>(imageUrl, { headers });
  }

  async toastError(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'danger'
      //cssClass: 'warning-toast',
    });
    toast.present();
  }

  async toastSuccess(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'success'
      //cssClass: 'green-toast',
    });
    toast.present();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });

    loading.present();
  }

  async hideLoading() {
    this.loadingCtrl.dismiss();
  }
}