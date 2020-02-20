import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'product-add-edit',
    loadChildren: () => import('./product-add-edit/product-add-edit.module').then( m => m.ProductAddEditPageModule)
  },
  {
    path: 'store-list',
    loadChildren: () => import('./store-list/store-list.module').then( m => m.StoreListPageModule)
  },
  {
    path: 'store-add',
    loadChildren: () => import('./store-add/store-add.module').then( m => m.StoreAddPageModule)
  },
  {
    path: 'customer-list',
    loadChildren: () => import('./customer-list/customer-list.module').then( m => m.CustomerListPageModule)
  },
  {
    path: 'customer-add-edit',
    loadChildren: () => import('./customer-add-edit/customer-add-edit.module').then( m => m.CustomerAddEditPageModule)
  },
  {
    path: 'sale-summary-list',
    loadChildren: () => import('./sale-summary-list/sale-summary-list.module').then( m => m.SaleSummaryListPageModule)
  },
  {
    path: 'sale-summary-detail',
    loadChildren: () => import('./sale-summary-detail/sale-summary-detail.module').then( m => m.SaleSummaryDetailPageModule)
  },
  {
    path: 'sell-product',
    loadChildren: () => import('./sell-product/sell-product.module').then( m => m.SellProductPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
