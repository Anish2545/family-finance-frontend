import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { Tab2Page } from './tab2.page';

// Import Swiper's register function
import { register } from 'swiper/element/bundle';

// Call Swiper's register function to globally register Swiper's custom elements
register();

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab2PageModule {}
