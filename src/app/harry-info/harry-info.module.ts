import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarryInfoPageRoutingModule } from './harry-info-routing.module';

import { HarryInfoPage } from './harry-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarryInfoPageRoutingModule
  ],
  declarations: [HarryInfoPage]
})
export class HarryInfoPageModule {}
