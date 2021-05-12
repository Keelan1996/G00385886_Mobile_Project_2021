import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComedyMoviePageRoutingModule } from './comedy-movie-routing.module';

import { ComedyMoviePage } from './comedy-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComedyMoviePageRoutingModule
  ],
  declarations: [ComedyMoviePage]
})
export class ComedyMoviePageModule {}
