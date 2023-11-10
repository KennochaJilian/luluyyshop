import {Injectable} from "@angular/core";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService{
  constructor(private _snackBar: MatSnackBar) {
  }
  success(msg: string){
    const config: MatSnackBarConfig = {
      duration: 3000
    }
    this._snackBar.open(msg, '', config )
  }

}
