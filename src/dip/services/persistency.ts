import { PersistencyProtocol } from '../interfaces/persistencyProtocol';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }
}
