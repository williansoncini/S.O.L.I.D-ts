import { Menssaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/ShoppingCart';

const shoppingCart = new ShoppingCart();
const menssaging = new Menssaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, menssaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 15.48));
shoppingCart.addItem(new Product('Tenis', 105.48));
shoppingCart.addItem(new Product('Boné', 20.14));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
