import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleSummaryDetailPageRoutingModule } from './sale-summary-detail-routing.module';

import { SaleSummaryDetailPage } from './sale-summary-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleSummaryDetailPageRoutingModule
  ],
  declarations: [SaleSummaryDetailPage]
})
export class SaleSummaryDetailPageModule {}
