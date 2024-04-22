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

  //ngOnInit() {
    // const preferences = await Preferences.get({ key: 'isSecondTime' });

    // const isSecondTime = preferences.value;

    // if (isSecondTime === 'true') {
    //   this.router.navigateByUrl('/start/login');
    // } else {
    //   this.router.navigateByUrl('/start');
    // }
  //}
}
