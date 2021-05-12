import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComedyMoviePage } from './comedy-movie.page';

const routes: Routes = [
  {
    path: '',
    component: ComedyMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComedyMoviePageRoutingModule {}
