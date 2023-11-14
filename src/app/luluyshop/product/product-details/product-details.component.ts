import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../classes/product";
import {User} from "../../user/classes/user";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  product: Product;
  editMode = false;
  userIsAdmin = User.isAdmin();

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
  onEdit(){
    this.editMode = !this.editMode
  }

}
