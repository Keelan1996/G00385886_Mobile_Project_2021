import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperManPage } from './super-man.page';

const routes: Routes = [
  {
    path: '',
    component: SuperManPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperManPageRoutingModule {}
