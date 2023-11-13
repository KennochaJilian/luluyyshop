import { Component } from '@angular/core';
import {Product} from "../../product/classes/product";
import {ProductService} from "../../product/services/product.service";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../services/category.service";
import {Category} from "../classes/category";

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.scss'
})
export class CategoryDetailsComponent {
  category: Category;
  constructor(private service: CategoryService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next : (params: any) => {
        this.service.read(params['id']).subscribe({
          next: (category: Category) => this.category = category
        })
      }
    })
  }

}
