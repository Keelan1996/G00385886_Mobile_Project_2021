import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatmanInfoPage } from './batman-info.page';

const routes: Routes = [
  {
    path: '',
    component: BatmanInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatmanInfoPageRoutingModule {}
