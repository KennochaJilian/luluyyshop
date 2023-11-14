import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../product/classes/product";
import {CategoryService} from "../../category/services/category.service";
import {Category} from "../../category/classes/category";
import {ProductService} from "../../product/services/product.service";
import {SnackbarService} from "../../../generics/services/snack-bar.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit{
  @Input() product: Product = new Product();
  @Input() editMode = false;
  categories: Category[];
  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private sn:SnackbarService
              ) {
  }
  onSubmit(){
    if(this.editMode){
      this.productService.update(`${this.product.id}`, this.product).subscribe({
        next: () => this.sn.success(this.productService.updateNotify)
      })
      return
    }
    this.productService.create(this.product).subscribe({
      next: () => this.sn.success(this.productService.addNotify)
    })

  }

  ngOnInit(): void {
    this.categoryService.list().subscribe({
      next: res => this.categories = res
    })

  }

}
