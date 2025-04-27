import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'list',
    loadComponent: () => import('./features/products/product-list/product-list.component').then(mod => mod.ProductListComponent),
    title: 'Bike List',
  },
  {
    path: 'list/:id',
    loadComponent: () =>
      import('./features/products/product-detail/components/product-detail/product-detail.component').then(mod => mod.ProductDetailComponent),
    title: 'Product Detail',
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];
