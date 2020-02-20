import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreAddPageRoutingModule } from './store-add-routing.module';

import { StoreAddPage } from './store-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreAddPageRoutingModule
  ],
  declarations: [StoreAddPage]
})
export class StoreAddPageModule {}
