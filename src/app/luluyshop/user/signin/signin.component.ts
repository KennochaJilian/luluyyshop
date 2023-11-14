import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from "../user.service";
import {SnackbarService} from "../../../generics/services/snack-bar.service";
import {Router} from "@angular/router";
import {UserResponse} from "../classes/user-response";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  user = {
    emailAddress: '',
    password: ''
  }
  constructor(private service: UserService, private sn: SnackbarService, private router: Router) {
  }

  signIn(){
    this.service.signIn(this.user).subscribe({
      next: (userResponse: UserResponse) => {
        localStorage.setItem('user', JSON.stringify(userResponse));
        this.sn.success("Connexion réussie");
        this.router.navigate(['luluyshop/user/profile'])
      },
    })
  }
}
