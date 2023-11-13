import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import {Route, RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

const routes: Route[] = [
  {
    path : '',
    component: CategoryComponent
  },
  {
    path: 'details/:id',
    component: CategoryDetailsComponent
  }
]

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ]
})
export class CategoryModule { }
