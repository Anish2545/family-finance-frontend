import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Add this line

import { IonicModule } from '@ionic/angular';

import { SubuserPageRoutingModule } from './subuser-routing.module';

import { SubuserPage } from './subuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    SubuserPageRoutingModule
  ],
  declarations: [SubuserPage]
})
export class SubuserPageModule {}
