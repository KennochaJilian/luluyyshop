import {Component, Input} from '@angular/core';
import {PaymentMethod} from "../../../classes/payment-mode";
import {UserService} from "../../../user.service";
import {SnackbarService} from "../../../../../generics/services/snack-bar.service";

@Component({
  selector: 'app-payment-mode-form',
  templateUrl: './payment-mode-form.component.html',
  styleUrl: './payment-mode-form.component.scss'
})
export class PaymentModeFormComponent {
  @Input() currentPaymentMode:PaymentMethod | undefined = new PaymentMethod();
  @Input() userId: string;

  constructor(private service: UserService, private sn: SnackbarService) {
  }
  onSubmit(){
    if(!this.currentPaymentMode){
      return
    }
    if(this.currentPaymentMode.id){
      this.service.updatePaymentMode(this.userId, this.currentPaymentMode.id.toString(), this.currentPaymentMode).subscribe({
        next: () => {
          this.sn.success("Mode de paiement mis à jour")
          this.service.updateRequested.next("");
        }
      })
      return;
    }
    this.service.createPaymentMode(this.userId, this.currentPaymentMode).subscribe({
      next: () => {
        this.sn.success("Mode de paiement ajouté")
        this.service.updateRequested.next("");
      }
    })
  }



}
