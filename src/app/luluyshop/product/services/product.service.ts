import {Inject, Injectable} from "@angular/core";
import {ServiceGeneric} from "../../../generics/services/http/service-generic.service";
import {Environment} from "../../../generics/classes/environment";
import {LulushopHttpService} from "../../../generics/services/http/lulushop-http.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ServiceGeneric {
  override updateNotify = "Le produit a bien été mis à jour"
  override addNotify = "Le produit a été ajouté"
  constructor(@Inject('env') protected override environment: Environment, http : LulushopHttpService) {
    super(environment, http, 'products');
  }
}
