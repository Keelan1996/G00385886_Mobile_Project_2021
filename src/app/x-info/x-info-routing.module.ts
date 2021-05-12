import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XInfoPage } from './x-info.page';

const routes: Routes = [
  {
    path: '',
    component: XInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XInfoPageRoutingModule {}
