import {Product} from "../../product/classes/product";

export class Cart {
  Products: Product[]
  UserId: string;
  id:string;
  total?:number
}
