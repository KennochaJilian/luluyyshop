import {Inject, Injectable} from '@angular/core';
import {ServiceGeneric} from "../../generics/services/http/service-generic.service";
import {Environment} from "../../generics/classes/environment";
import {LulushopHttpService} from "../../generics/services/http/lulushop-http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService extends ServiceGeneric {
  override updateNotify = "L'utilisateur a bien été mis à jour"
  override addNotify = "L'utilisateur a été ajouté"
  constructor(@Inject('env') protected override environment: Environment, http : LulushopHttpService) {
    super(environment, http, 'users');
  }
  signup(newUser: any) : Observable<any>{
    const url = `${this.baseUrl}/signup`
    return this.http.post(url, newUser);
  }


}
