import { CustomerOrder } from '../interfaces/customerProtocol';
import { MenssagingProtocol } from '../interfaces/menssagingProtocol';
import { OrderStatus } from '../interfaces/orderstatus';
import { PersistencyProtocol } from '../interfaces/persistencyProtocol';
import { ShoppingCartProtocol } from '../interfaces/shoppingCartProtocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly shoppingCart: ShoppingCartProtocol,
    private readonly menssaging: MenssagingProtocol,
    private readonly persistency: PersistencyProtocol,
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
