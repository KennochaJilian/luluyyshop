import { Component } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {SnackbarService} from "../../../generics/services/snack-bar.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  user = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: ''
  }
  constructor(private service : UserService, private router: Router, private sn: SnackbarService) {
  }
  signup(){
    this.service.signup(this.user).subscribe({
      next: () => {
        this.sn.success("Inscription ok");
        this.router.navigate(['luluyshop/user/signin'])
      },
    })
  }

}
