import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperInfoPageRoutingModule } from './super-info-routing.module';

import { SuperInfoPage } from './super-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperInfoPageRoutingModule
  ],
  declarations: [SuperInfoPage]
})
export class SuperInfoPageModule {}
