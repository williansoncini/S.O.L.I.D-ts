import { CartItem } from '../interfaces/cartitem';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
