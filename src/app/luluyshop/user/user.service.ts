import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:8080/api/users/signup"

  constructor(private http: HttpClient) {
  }
  signup(newUser: any) : Observable<any>{
    return this.http.post(this.url, newUser);
  }
}
