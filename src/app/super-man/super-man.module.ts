import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperManPageRoutingModule } from './super-man-routing.module';

import { SuperManPage } from './super-man.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperManPageRoutingModule
  ],
  declarations: [SuperManPage]
})
export class SuperManPageModule {}
