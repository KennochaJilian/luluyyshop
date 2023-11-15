import {Component, OnInit} from '@angular/core';
import {Cart} from "./classes/cart";
import {CartService} from "./services/cart.service";
import {UserLocalService} from "../user/classes/user-local.service";
import {SnackbarService} from "../../generics/services/snack-bar.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  cart: Cart;
  userId = UserLocalService.getUser().id;

  constructor(private service: CartService, private sn: SnackbarService) {}

  ngOnInit(): void {
    this.load();
  }
  load(){
    if(this.userId){
      this.service.getOrCreate(this.userId).subscribe({
        next: (res: any) => this.cart = res
      })
    }
  }
  handleDeleteItem($event: any, productId: any){
    this.service.removeProductFromCart(this.cart.id, productId).subscribe({
      next: () => {
        this.load();
        this.sn.success("Produit supprimé");
        this.service.updateRequested.next(null)
      }
    })
  }
}
