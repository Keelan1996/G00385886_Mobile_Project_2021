import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XInfoPageRoutingModule } from './x-info-routing.module';

import { XInfoPage } from './x-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XInfoPageRoutingModule
  ],
  declarations: [XInfoPage]
})
export class XInfoPageModule {}
