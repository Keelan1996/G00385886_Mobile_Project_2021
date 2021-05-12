import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionMoviePageRoutingModule } from './action-movie-routing.module';

import { ActionMoviePage } from './action-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionMoviePageRoutingModule
  ],
  declarations: [ActionMoviePage]
})
export class ActionMoviePageModule {}
