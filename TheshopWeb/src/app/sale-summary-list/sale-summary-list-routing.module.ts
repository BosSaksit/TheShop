import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleSummaryListPage } from './sale-summary-list.page';

const routes: Routes = [
  {
    path: '',
    component: SaleSummaryListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleSummaryListPageRoutingModule {}
