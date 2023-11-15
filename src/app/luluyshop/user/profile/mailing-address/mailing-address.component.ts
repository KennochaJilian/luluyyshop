import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user.service";
import {UserLocalService} from "../../classes/user-local.service";
import {PaymentMethod} from "../../classes/payment-mode";
import {load} from "@angular-devkit/build-angular/src/utils/server-rendering/esm-in-memory-loader/loader-hooks";
import {MailingAddress} from "../../classes/mailing-address";

@Component({
  selector: 'app-mailing-address',
  templateUrl: './mailing-address.component.html',
  styleUrl: './mailing-address.component.scss'
})
export class MailingAddressComponent implements OnInit{
  mailingAddresses: MailingAddress[];
  userId = UserLocalService.getUser().id;
  addVisible = false;
  currentAddress: MailingAddress | undefined;
  constructor(private service: UserService) {

  }

  ngOnInit(): void {
    this.load();
    this.service.updateRequested.subscribe({
      next: () => this.load()
    })

  }
  load(){
    this.service.getAddresses(this.userId).subscribe({
      next: (res: any) => {
        this.mailingAddresses = res;
        this.addVisible = false;
        this.currentAddress = undefined
      }
    });
  }
  toggleAdd(){
    this.addVisible = !this.addVisible
    if(!this.addVisible){
      this.currentAddress = undefined
    }else{
      this.currentAddress = new MailingAddress();
    }
  }
  setAddress(address: MailingAddress){
    this.currentAddress = address;
    this.addVisible = true;
  }

}
