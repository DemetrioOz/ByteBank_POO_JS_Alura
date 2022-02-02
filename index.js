const $ = (message) => console.log([message]);

const Cliente = require("./Cliente");
const ContaCorrente = require("./ContaCorrente");

const cliente1 = new Cliente("Ricardo", 11122233344);

const cliente2 = new Cliente("Alice", 77788899911);

const conta1 = new ContaCorrente(1001, cliente1);

const conta2 = new ContaCorrente(102, cliente2);

conta1.depositar(1000);
// contaCorrenteRicardo.sacar(50);
// contaCorrenteRicardo.depositar(-10);
// $(contaCorrenteRicardo.saldo);

// $([cliente1, cliente2]);
$([
  {
    conta: conta1,
    cliente: conta1.cliente,
    saldo: conta1.saldo,
  },
  {
    conta: conta2,
    cliente: conta2.cliente,
    saldo: conta2.saldo,
  },
]);

$(ContaCorrente.numeroDeContas);

// contaCorrenteRicardo.transferir(200, conta2);
