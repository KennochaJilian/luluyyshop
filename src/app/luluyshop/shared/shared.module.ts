import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import { ProductFormComponent } from './product-form/product-form.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductFormComponent
  ],
    imports: [
        CommonModule,
        MatCardModule,
        RouterLink,
        MatInputModule,
        FormsModule,
        MatSelectModule,
        MatButtonModule
    ],
  exports: [
    ProductsListComponent,
    ProductFormComponent
  ]
})
export class SharedModule { }
