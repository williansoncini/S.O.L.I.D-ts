class Animal {
  constructor(protected _nome: string) {}

  get nome() {
    return this._nome;
  }
}

class Camelo extends Animal {
  private icone = '🐫';

  get nome(): string {
    return `${this.icone} ${this._nome}`;
  }
}

class Zebra extends Animal {
  private icone = '🦓';

  get nome(): string {
    return `${this.icone} ${this._nome}`;
  }
}

const animal = new Animal('Animal');
const camelo = new Camelo('camelo');
const zebra = new Zebra('zebra');

console.log(animal.nome);
console.log(camelo.nome);
console.log(zebra.nome);
