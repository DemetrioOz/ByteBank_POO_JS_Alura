const Cliente = require("./Cliente");
class ContaCorrente {
  agencia;
  // atributo onde a classe é usado como um todo, ou seja não fica variavel se instaciar
  static numeroDeContas = 0;

  // atribruto privado
  #cliente;
  #saldo;

  set cliente(cliente) {
    if (cliente instanceof Cliente) this.#cliente = cliente;
  }

  get cliente() {
    return this.#cliente;
  }

  get saldo() {
    return this.#saldo;
  }

  constructor(agencia, cliente, saldo = 0) {
    this.agencia = agencia;
    this.#cliente = cliente;
    this.#saldo = saldo;
    // seta como atributo "global" da classe
    ContaCorrente.numeroDeContas++;
  }

  sacar(valor) {
    if (this.#saldo >= valor) {
      this.#saldo -= valor;
      return valor;
    }
    return;
  }

  depositar(valor) {
    if (valor <= 0) return;
    this.#saldo += valor;
  }

  transferir(valor, conta) {
    // variavel conta reflete a uma referencia ao objeto conta passado
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}

module.exports = ContaCorrente;
