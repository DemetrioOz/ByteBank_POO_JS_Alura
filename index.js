const $ = (message) => console.log(message);

const Cliente = require("./Cliente");
const ContaCorrente = require("./ContaCorrente");

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233344;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 77788899911;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(100);
$(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(50);
contaCorrenteRicardo.depositar(-10);
$(contaCorrenteRicardo.saldo);

// $([cliente1, cliente2]);
// $(contaCorrenteRicardo);
