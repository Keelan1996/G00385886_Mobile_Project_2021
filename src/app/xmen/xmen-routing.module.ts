import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XmenPage } from './xmen.page';

const routes: Routes = [
  {
    path: '',
    component: XmenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XmenPageRoutingModule {}
