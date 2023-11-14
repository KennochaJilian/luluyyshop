import {Role} from "./role";

export class User {
  firstName: string;
  lastName: string;
  Roles : Role[]

  public static isAdmin(){
    const stringUser = localStorage.getItem('user')
    if(stringUser){
      const user: User = JSON.parse(stringUser).user;
      return user.Roles.some(x => x.name == "ADMIN");
    }
    return false;

  }
}
