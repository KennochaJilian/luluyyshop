import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user.service";
import {UserLocalService} from "../../classes/user-local.service";
import {PaymentMethod} from "../../classes/payment-mode";
import {load} from "@angular-devkit/build-angular/src/utils/server-rendering/esm-in-memory-loader/loader-hooks";

@Component({
  selector: 'app-payment-mode',
  templateUrl: './payment-mode.component.html',
  styleUrl: './payment-mode.component.scss'
})
export class PaymentModeComponent implements OnInit{
  paymentModes: PaymentMethod[];
  userId = UserLocalService.getUser().id;
  addVisible = false;
  currentPaymentMode: PaymentMethod | undefined;
  constructor(private service: UserService) {

  }

  ngOnInit(): void {
    this.load();
    this.service.updateRequested.subscribe({
      next: () => this.load()
    })

  }
  load(){
    this.service.getPaymentsModes(this.userId).subscribe({
      next: (res: any) => {
        this.paymentModes = res;
        this.addVisible = false;
        this.currentPaymentMode = undefined
      }
    });
  }
  toggleAdd(){
    this.addVisible = !this.addVisible
    if(!this.addVisible){
      this.currentPaymentMode = undefined
    }else{
      this.currentPaymentMode = new PaymentMethod();
    }
  }
  setPaymentMode(paymentMode: PaymentMethod){
    this.currentPaymentMode = paymentMode;
    this.addVisible = true;
  }

}
