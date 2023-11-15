import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LuluyshopComponent} from "./luluyshop.component";
import {Route, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "./shared/shared.module";
import {CartModule} from "./cart/cart.module";
import {MatBadgeModule} from "@angular/material/badge";

const routes: Route[] = [
  {
    path: '',
    component: LuluyshopComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    LuluyshopComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CartModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ]
})
export class LuluyshopModule { }
