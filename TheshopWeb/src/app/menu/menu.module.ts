import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { Routes, RouterModule } from '@angular/router';
import { ProductListPageModule } from '../product-list/product-list.module';
import { StoreListPageModule } from '../store-list/store-list.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild(routes),
    MenuPageRoutingModule,
    ProductListPageModule,
    StoreListPageModule,
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
