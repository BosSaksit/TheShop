import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductAddEditPage } from './product-add-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ProductAddEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductAddEditPageRoutingModule {}
