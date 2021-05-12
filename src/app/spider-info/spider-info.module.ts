import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpiderInfoPageRoutingModule } from './spider-info-routing.module';

import { SpiderInfoPage } from './spider-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpiderInfoPageRoutingModule
  ],
  declarations: [SpiderInfoPage]
})
export class SpiderInfoPageModule {}
