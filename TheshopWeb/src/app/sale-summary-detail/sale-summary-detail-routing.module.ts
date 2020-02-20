import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleSummaryDetailPage } from './sale-summary-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SaleSummaryDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleSummaryDetailPageRoutingModule {}
