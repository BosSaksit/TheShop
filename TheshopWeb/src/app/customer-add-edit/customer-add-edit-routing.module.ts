import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerAddEditPage } from './customer-add-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerAddEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerAddEditPageRoutingModule {}
