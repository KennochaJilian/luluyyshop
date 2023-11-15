import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {ProfileComponent} from "./profile/profile.component";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {userGuard} from "./classes/user.guard";
import { PaymentModeComponent } from './profile/payment-mode/payment-mode.component';
import {MatIconModule} from "@angular/material/icon";
import {ModalBodyComponent, ModalComponent, ModalHeaderComponent} from "@coreui/angular";
import {SharedModule} from "../shared/shared.module";
import { PaymentModeFormComponent } from './profile/payment-mode/payment-mode-form/payment-mode-form.component';
import {MailingAddressComponent} from "./profile/mailing-address/mailing-address.component";
import {MailingAddressFormComponent} from "./profile/mailing-address/mailing-address-form/mailing-address-form.component";
import {MatRadioModule} from "@angular/material/radio";

const routes: Route[] = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [userGuard],
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
]

@NgModule({
  declarations: [
    ProfileComponent,
    SigninComponent,
    SignupComponent,
    PaymentModeComponent,
    PaymentModeFormComponent,
    MailingAddressComponent,
    MailingAddressFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    ModalBodyComponent,
    ModalComponent,
    ModalHeaderComponent,
    SharedModule,
    MatRadioModule,
  ],
})
export class UserModule { }
