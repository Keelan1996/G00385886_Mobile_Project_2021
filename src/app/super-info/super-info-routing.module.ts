import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperInfoPage } from './super-info.page';

const routes: Routes = [
  {
    path: '',
    component: SuperInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperInfoPageRoutingModule {}
