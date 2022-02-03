const $ = (message) => console.log([message]);

import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaPoupanca = new ContaPoupanca(cliente1, 1001);
const contaCorrente = new ContaCorrente(cliente1, 1001);

$(contaCorrente);
$(contaPoupanca);
// console.log(conta1);
