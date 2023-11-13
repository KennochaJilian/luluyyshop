import {Component, OnInit} from '@angular/core';
import {Product} from "./classes/product";
import {ProductService} from "./services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  products:Product[];
  constructor(private service: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.service.list().subscribe({
      next: (res: Product[]) => this.products = res
    })
  }
}
