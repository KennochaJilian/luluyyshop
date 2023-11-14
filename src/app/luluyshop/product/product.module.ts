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
  CarouselItemComponent, ModalBodyComponent, ModalComponent, ModalFooterComponent, ModalHeaderComponent
} from "@coreui/angular";
import {SharedModule} from "../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { SearchBarComponent } from './search-bar/search-bar.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

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
    SearchBarComponent,
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
    MatButtonModule,
    ModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    MatIconModule,
    MatInputModule,
    FormsModule
  ]
})
export class ProductModule { }
