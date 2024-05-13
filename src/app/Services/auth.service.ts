import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) { }

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  private userLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  get isuserLoggedIn() {
    return this.userLoggedIn.asObservable();
  }

  // async getRoleId() {
  //   const token = await Preferences.get({ key: 'u' });

  //   console.log('token', token.value);
  //   return;
  // }

  async getUserId() {
    const token = await Preferences.get({ key: 'u' });
    console.log(token);
    return token.value ? token.value : '';
  }

  async getUserToken(): Promise<string> {
    const token = await Preferences.get({ key: 'access_token' });
    // Type assertion to ensure the return type is string
    return <string>token.value || '';
  }

  async getOldUserToken(): Promise<Boolean> {
    let t = await Preferences.get({ key: 'isOldUser' });
    if (t) {
      return t.value && t.value == 'true' ? true : false;
    } else {
      return false;
    }
  }

  async login() {
    const token = await Preferences.get({ key: 'u' });
    if (token) {
      this.loggedIn.next(true);
    }
  }

  logout() {
    this.loggedIn.next(false);
  }

  checkUserIsLoggedIn() {
    const helper = new JwtHelperService();
    const token = this.getUserToken();
    let decodedToken: any = '';
    if (token) {
      decodedToken = helper.decodeToken(token) || '';
    }

    console.log(decodedToken);

    if (decodedToken) {
      return true;
    } else {
      return false;
    }
  }
}