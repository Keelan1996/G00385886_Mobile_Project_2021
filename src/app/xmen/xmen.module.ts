import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XmenPageRoutingModule } from './xmen-routing.module';

import { XmenPage } from './xmen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XmenPageRoutingModule
  ],
  declarations: [XmenPage]
})
export class XmenPageModule {}
