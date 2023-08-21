//victor
const prompt = require('prompt-sync')();

 

const codigo = ["001", "002", "003", "004", "005", "006", "007", "008", "009", "010"];

const serviço = ["Distribuição de Suprimentos", "Transporte de Medicamentos", "Fornecimento de Material Escolar", "Doações para Refugiados", "Apoio à Agricultura Sustentável", "Combate a Incêndios Florestais", "Mapeamento de Áreas Afetadas", "Entrega de Água Potável", "Monitoramento de Saúde Pública", "Apoio em Missões de Resgate"];

const valor = [50.00, 30.00, 20.00, 40.00, 25.00, 70.00, 60.00, 10.00, 15.00, 80.00];

let MOVIMENTO = Array(10).fill(0);

 

let carrinho = [];

 

function exibirserviços() {

  console.log("==== Lista de Serviços ====");

  for (let i = 0; i < codigo.length; i++) {

    console.log(`${codigo[i]} - ${serviço[i]} - Valor: R$${valor[i].toFixed(2)}`);

  }

  console.log("===========================");

}

 

function adicionarAoCarrinho(codigoserviço) {

  const indice = codigo.indexOf(codigoserviço);

 

let opcaoSubMenu = leia("Digite o numero da sua opção : ")

            if(opcaoSubMenu=="1"){

                console.log("cod\tserviço\tvalor")

                for(let x = 0; x<cod.length ; x++){

                    console.log(cod[x]+"\t"+serviço[x]+"\t\t"+valor[x]+"\t"[x])

                }

            }

  if (indice !== -1) {

    if (carrinho.length < 10 && carrinho.indexOf(codigoserviço) === -1) {

      carrinho.push(codigoserviço);

      console.log(`Serviço ${serviço[indice]} adicionado ao carrinho.`);

    } else {

      console.log("Carrinho cheio ou serviço já adicionado.");

    }

  } else {

    console.log("Serviço não encontrado.");

  }

}

 

function calcularTotalDoacao() {

  let total = 0;

  for (const codigoserviço of carrinho) {

    const indice = codigo.indexOf(codigoserviço);

    total += valor[indice];

  }

  return total;

}

 

function reiniciarCarrinho() {

  carrinho = [];

  MOVIMENTO = Array(10).fill(0);

}

 //marco

function main() {

  while (true) {

    console.clear();

    exibirserviços();

   

    const codigoSolicitado = prompt("Digite o código do serviço desejado ou 'sair' para encerrar:");

    if (codigoSolicitado === 'sair') {

      console.clear();

      console.log("Encerrando o programa.");

      break;

    }

 

    adicionarAoCarrinho(codigoSolicitado);

 

    console.log("Carrinho:");

    for (const codigoserviço of carrinho) {

      const indice = codigo.indexOf(codigoserviço);

      console.log(`${serviço[indice]} - Valor: R$${valor[indice].toFixed(2)}`);

    }
//rodrigo
 

    console.log(`Total do carrinho: R$${calcularTotalDoacao().toFixed(2)}`);

    const continuar = prompt("Deseja adicionar mais serviços ao carrinho? (sim/não):");

    if (continuar.toLowerCase() !== "sim") {

      console.log(`Total da doação para a ONG: R$${calcularTotalDoacao().toFixed(2)}`);

      reiniciarCarrinho();

    }

  }

}

 

main();

 

