import {Component, OnInit} from '@angular/core';
import {Product} from "./classes/product";
import {ProductService} from "./services/product.service";
import {Router} from "@angular/router";
import {User} from "../user/classes/user";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  products:Product[];
  editMode = false;
  userIsAdmin = User.isAdmin();
  public visible = false;
  constructor(private service: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.service.list().subscribe({
      next: (res: Product[]) => this.products = res
    })
  }
  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
  search(term: any){
    this.service.search(term).subscribe({
      next: res => this.products = res
    })
  }
}
