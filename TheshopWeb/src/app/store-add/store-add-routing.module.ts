import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreAddPage } from './store-add.page';

const routes: Routes = [
  {
    path: '',
    component: StoreAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreAddPageRoutingModule {}
