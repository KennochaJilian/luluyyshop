import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LuluyshopComponent} from "./luluyshop.component";
import {Route, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

const routes: Route[] = [
  {
    path: '',
    component: LuluyshopComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    LuluyshopComponent,
    HomeComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MatToolbarModule, MatIconModule, MatButtonModule]
})
export class LuluyshopModule { }
