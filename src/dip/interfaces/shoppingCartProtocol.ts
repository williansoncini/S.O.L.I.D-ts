import { CartItem } from './cartitem';

export interface ShoppingCartProtocol {
  get items(): Readonly<CartItem[]>;
  addItem(item: CartItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
