import {Component, OnInit} from '@angular/core';
import {UserLocalService} from "./user/classes/user-local.service";
import {CartService} from "./cart/services/cart.service";

@Component({
  selector: 'app-bioshop',
  templateUrl: './luluyshop.component.html',
  styleUrl: './luluyshop.component.scss'
})
export class LuluyshopComponent implements OnInit {
  title = "Luluyshop";
  cartId: string;
  countProduct = 0;
  userId = UserLocalService.getUser().id;

  constructor(private cartService: CartService) {
  }

  getLink() {
    if (this.userId) {
      return 'user/profile'
    }
    return 'user/signup'
  }

  ngOnInit(): void {
    this.loadCart();
    this.cartService.updateRequested.subscribe({
      next: () => this.loadCart()
    })
  }

  loadCart() {
    if (this.userId) {
      this.cartService.countProduct(this.userId).subscribe({
          next: (res: any) => {
            console.log(this.countProduct)
            this.countProduct = res
          }
        }
      )
    }
    else {
      this.countProduct = 0
    }

  }
}
