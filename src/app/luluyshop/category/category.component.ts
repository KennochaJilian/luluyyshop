import {Component, OnInit} from '@angular/core';
import {Category} from "./classes/category";
import {CategoryService} from "./services/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{
  categories: Category[]

  constructor(private service: CategoryService) {
  }

  ngOnInit(): void {
    this.service.list().subscribe({
      next: (res: Category[]) => this.categories = res
    })
  }

}
