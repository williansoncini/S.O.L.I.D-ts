import { MenssagingProtocol } from '../interfaces/menssagingProtocol';

export class Menssaging implements MenssagingProtocol {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }
}
