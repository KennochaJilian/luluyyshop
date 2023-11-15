import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../product/classes/product";
import {CartService} from "../../cart/services/cart.service";
import {UserLocalService} from "../../user/classes/user-local.service";
import {Cart} from "../../cart/classes/cart";
import {SnackbarService} from "../../../generics/services/snack-bar.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit{
  @Input() products: Product[];
  userId = UserLocalService.getUser().id;
  cart: Cart;
  constructor(private cartService: CartService, private sn: SnackbarService) {
  }

  ngOnInit(): void {
    this.loadCart()
  }
  loadCart(){
    if(this.userId){
      this.cartService.getOrCreate(this.userId).subscribe({
        next: (res: any) => this.cart = res
      })
    }
  }
  addToCart(productId:any){
    if(!this.cart){
      this.sn.success("Veuillez vous connecter");
      return
    }
    this.cartService.addProduct(this.cart.id, productId).subscribe({
      next: (res: any) => {
        this.cartService.updateRequested.next(null);
        this.sn.success("Produit ajouté")
      }
    })
  }

}
