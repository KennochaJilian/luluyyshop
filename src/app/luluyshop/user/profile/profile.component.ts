import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from "../user.service";
import {User} from "../classes/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  user:User;
  constructor(private service: UserService) {
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if(user){
      this.user = JSON.parse(user).user;
    }

  }

}
