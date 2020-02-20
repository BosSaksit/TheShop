import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductAddEditPageRoutingModule } from './product-add-edit-routing.module';

import { ProductAddEditPage } from './product-add-edit.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ProductAddEditPageRoutingModule
  ],
  declarations: [ProductAddEditPage]
})
export class ProductAddEditPageModule {}
