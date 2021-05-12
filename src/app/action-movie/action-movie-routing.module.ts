import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionMoviePage } from './action-movie.page';

const routes: Routes = [
  {
    path: '',
    component: ActionMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionMoviePageRoutingModule {}
