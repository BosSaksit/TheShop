import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerAddEditPageRoutingModule } from './customer-add-edit-routing.module';

import { CustomerAddEditPage } from './customer-add-edit.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CustomerAddEditPageRoutingModule
  ],
  declarations: [CustomerAddEditPage]
})
export class CustomerAddEditPageModule {}
