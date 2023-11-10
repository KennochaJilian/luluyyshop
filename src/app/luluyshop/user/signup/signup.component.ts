import { Component } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";

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
  constructor(private service : UserService, private router: Router) {
  }
  signup(){
    this.service.signup(this.user).subscribe({
      next: () => this.router.navigate(['user/signin'])
    })
  }

}
