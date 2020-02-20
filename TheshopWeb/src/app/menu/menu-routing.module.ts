import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { ProductListPage } from '../product-list/product-list.page';
import { StoreListPage } from '../store-list/store-list.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: MenuPage,
//     children: [
//       {
//         path: 'product-list',
        // outlet: 'menucontent',
        // component: ProductListPage,
        // loadChildren: () => import('../product-list/product-list.module').then(m => m.ProductListPageModule)
        // loadChildren: './product-list/product-list.module#ProductListPageModule'
      // },
      // {
        // path: 'store-list',
        // outlet: 'menucontent',
        // component : StoreListPage,
        // loadChildren: () => import('../store-list/store-list.module').then(m => m.StoreListPageModule)
        // loadChildren: './store-list/store-list.module#StoreListPageModule'
      // }
    // ]
  // },
  // {
  //   path: '',
  //   redirectTo: 'product-list'
  // }
// ];

// const routes:Routes = [
//   {
//     path: '',
//     redirectTo: 'menu',
//     pathMatch: 'full'
//   },
//   { path: 'product-list', loadChildren: '../product-list/product-list.module#ProductListPageModule' },
//   { path: 'store-list', loadChildren: '../store-list/store-list.module#StoreListPageModule' },
 
// ]
const routes: Routes = [
  {
    path: '',
    component: MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
