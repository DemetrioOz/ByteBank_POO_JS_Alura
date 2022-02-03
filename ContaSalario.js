import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
  constructor(cliente) {
    super(saldoInicial, cliente, agencia);
  }

  sacar(valor) {
    const taxa = 1.02;
    this._sacar(valor, taxa);
  }
}
