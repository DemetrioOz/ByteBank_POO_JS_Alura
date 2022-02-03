const $ = (message) => console.log([message]);

import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./conta/ContaCorrente.js";
import { ContaPoupanca } from "./conta/ContaPoupanca.js";
import { ContaSalario } from "./conta/ContaSalario.js";

import { Gerente } from "./funcionario/Gerente.js";
import { Diretor } from "./funcionario/Diretor.js";

import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Demetrio", 10000, 1234);
const gerente = new Gerente("Gerente", 5000, 1234);

diretor.cadastrarSenha("123");
const estaLogado = SistemaAutenticacao.login(diretor, "123");

$(estaLogado);
