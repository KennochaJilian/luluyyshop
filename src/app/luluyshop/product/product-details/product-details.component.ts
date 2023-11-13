import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../classes/product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  product: Product;
  constructor(private service: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next : (params: any) => {
        this.service.read(params['id']).subscribe({
          next: (product: Product) => this.product = product
        })
      }
    })
  }

}
