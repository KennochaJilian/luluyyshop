import {Inject, Injectable} from '@angular/core';
import {ServiceGeneric} from "../../generics/services/http/service-generic.service";
import {Environment} from "../../generics/classes/environment";
import {LulushopHttpService} from "../../generics/services/http/lulushop-http.service";
import {Observable} from "rxjs";
import {User} from "./classes/user";

@Injectable({
  providedIn: 'root'
})
export class UserService extends ServiceGeneric {
  override updateNotify = "L'utilisateur a bien été mis à jour"
  override addNotify = "L'utilisateur a été ajouté"

  public currentUser: User;
  constructor(@Inject('env') protected override environment: Environment, http : LulushopHttpService) {
    super(environment, http, 'users');
  }
  signup(newUser: any) : Observable<any>{
    const url = `${this.baseUrl}/signup`
    return this.http.post(url, newUser);
  }
  signIn(user: any) : Observable<any>{
    const url = `${this.baseUrl}/signIn`
    return this.http.post(url, user);
  }
  getPaymentsModes(userId: string){
    const url = `${this.baseUrl}/${userId}/payment_methods`;
    return this.http.get(url);
  }
  createPaymentMode(userId: string, data:any){
    const url = `${this.baseUrl}/${userId}/payment_methods`;
    return this.http.post(url,data);
  }
  updatePaymentMode(userId: string, modeId: string, data: any){
    const url = `${this.baseUrl}/${userId}/payment_methods/${modeId}`;
    return this.http.put(url, data)
  }
  getAddresses(userId: string){
    const url = `${this.baseUrl}/${userId}/mailAddress`;
    return this.http.get(url);
  }
  createAddress(userId: string, data:any){
    const url = `${this.baseUrl}/${userId}/mailAddress`;
    return this.http.post(url,data);
  }
  updateAddress(userId: string, modeId: string, data: any){
    const url = `${this.baseUrl}/${userId}/mailAddress/${modeId}`;
    return this.http.put(url, data)
  }
}
