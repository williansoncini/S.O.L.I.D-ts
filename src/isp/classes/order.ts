import { CustomerOrder } from '../interfaces/customer-protocol';
import { OrderStatus } from '../interfaces/orderstatus';
import { Menssaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './ShoppingCart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly shoppingCart: ShoppingCart,
    private readonly menssaging: Menssaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  checkout(): void {
    if (this.shoppingCart.isEmpty()) {
      console.log('Carrinho vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.menssaging.sendMessage(
      `${this.customer.getName()} seu pedido foi recebido`,
    );
    this.persistency.saveOrder();
    this.shoppingCart.clear();
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}
