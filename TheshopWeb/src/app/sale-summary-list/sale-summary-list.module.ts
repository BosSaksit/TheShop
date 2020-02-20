import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleSummaryListPageRoutingModule } from './sale-summary-list-routing.module';

import { SaleSummaryListPage } from './sale-summary-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleSummaryListPageRoutingModule
  ],
  declarations: [SaleSummaryListPage]
})
export class SaleSummaryListPageModule {}
