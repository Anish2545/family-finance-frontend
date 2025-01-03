import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router) {
    // Hide the splash screen after 3 seconds (adjust as needed)
    setTimeout(() => {
      const splash = document.getElementById('splash-screen');
      if (splash) {
        splash.style.display = 'none';
      }
    }, 3000);
  }

  async ngOnInit() {
    const preferences = await Preferences.get({ key: 'isSecondTime' });
    const preferences2 = await Preferences.get({ key: 'access_token' });

    const isSecondTime = preferences.value;
    const access_token = preferences2.value;

    if (isSecondTime === 'true') {
      if (access_token) {
        this.router.navigateByUrl('/dashboard');
      } else {
        this.router.navigateByUrl('/start/login');
      }
    } else {
      this.router.navigateByUrl('/start');
    }
  }
}
