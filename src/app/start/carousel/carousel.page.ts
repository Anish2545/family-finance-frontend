import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import { Plugins } from '@capacitor/core';
const { Preferences } = Plugins;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.page.html',
  styleUrls: ['./carousel.page.scss'],
})
export class CarouselPage implements OnInit {

  constructor(private router: Router) { }

   ngOnInit() {
   this.initializeSwiper() ;
  }

  initializeSwiper() {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  async handleGetStarted() {
    await Preferences.set({ key: 'isSecondTime', value: 'true' });
    this.router.navigateByUrl('/start/login');
  }

}
