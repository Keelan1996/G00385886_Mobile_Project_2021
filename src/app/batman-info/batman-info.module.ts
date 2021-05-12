import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BatmanInfoPageRoutingModule } from './batman-info-routing.module';

import { BatmanInfoPage } from './batman-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BatmanInfoPageRoutingModule
  ],
  declarations: [BatmanInfoPage]
})
export class BatmanInfoPageModule {}
