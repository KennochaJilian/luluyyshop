import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    ProductsListComponent
  ],
    imports: [
        CommonModule,
        MatCardModule,
        RouterLink
    ],
  exports: [
    ProductsListComponent
  ]
})
export class SharedModule { }
