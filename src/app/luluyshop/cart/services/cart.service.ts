import {ServiceGeneric} from "../../../generics/services/http/service-generic.service";
import {Inject, Injectable} from "@angular/core";
import {Environment} from "../../../generics/classes/environment";
import {LulushopHttpService} from "../../../generics/services/http/lulushop-http.service";

@Injectable({
  providedIn: 'root'
})
export class CartService extends ServiceGeneric{
  constructor(@Inject('env') protected override environment: Environment, http : LulushopHttpService) {
    super(environment, http, 'carts');
  }
  getOrCreate(userId: string){
    const url = `${this.baseUrl}/user/${userId}`
    return this.http.get(url);
  }
  addProduct(cartId:string, productId:string){
    const url = `${this.baseUrl}/${cartId}/products/${productId}`;
    return this.http.post(url, "");
  }
  removeProductFromCart(cartId: string, productId:string){
    const url = `${this.baseUrl}/${cartId}/products/${productId}`;
    return this.http.delete(url)
  }
  countProduct(userId: string){
    const url = `${this.baseUrl}/user/${userId}/count`;
    return this.http.get(url);
  }
}
