class ContaCorrente {
  agencia;
  // atribruto privado
  #saldo;
  constructor(saldo = 0) {
    this.#saldo = saldo;
  }

  get saldo() {
    return this.#saldo;
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
}

module.exports = ContaCorrente;
