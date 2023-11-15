import {Component, Input} from '@angular/core';
import {PaymentMethod} from "../../../classes/payment-mode";
import {UserService} from "../../../user.service";
import {SnackbarService} from "../../../../../generics/services/snack-bar.service";
import {MailingAddress} from "../../../classes/mailing-address";

@Component({
  selector: 'app-mailing-form',
  templateUrl: './mailing-address.component.html',
  styleUrl: './mailing-address.component.scss'
})
export class MailingAddressFormComponent {
  @Input() currentAddress:MailingAddress | undefined = new MailingAddress();
  @Input() userId: string;

  constructor(private service: UserService, private sn: SnackbarService) {
  }
  onSubmit(){
    if(!this.currentAddress){
      return
    }
    if(this.currentAddress.id){
      this.service.updateAddress(this.userId, this.currentAddress.id.toString(), this.currentAddress).subscribe({
        next: () => {
          this.sn.success("Mode de paiement mis à jour")
          this.service.updateRequested.next("");
        }
      })
      return;
    }
    this.service.createAddress(this.userId, this.currentAddress).subscribe({
      next: () => {
        this.sn.success("Mode de paiement ajouté")
        this.service.updateRequested.next("");
      }
    })
  }



}
