import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {Route, Router, RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatCarouselModule} from "ng-mat-carousel";
import {
  CarouselCaptionComponent,
  CarouselComponent, CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent
} from "@coreui/angular";
import {SharedModule} from "../shared/shared.module";

const routes : Route[] = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'details/:id',
    component: ProductDetailsComponent
  }
]

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
    SharedModule,
  ]
})
export class ProductModule { }
