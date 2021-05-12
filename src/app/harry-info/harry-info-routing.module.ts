import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarryInfoPage } from './harry-info.page';

const routes: Routes = [
  {
    path: '',
    component: HarryInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarryInfoPageRoutingModule {}
