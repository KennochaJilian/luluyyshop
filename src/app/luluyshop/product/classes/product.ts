import {Category} from "../../category/classes/category";
import {Image} from "./image";

export class Product {
  name: string;
  description: string;
  price: number;
  stock: number;
  Category: Category;
  Images: Image[];
  id: number;
  CategoryId:number
}
