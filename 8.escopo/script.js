//Escopo de Função
//Variáveis declaradas dentro de funções não são acessadas fora das mesmas

function mostrarCarro() {
  let carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); //Fusca no console
//console.log(carro); //erro, carro is not defined

//Variavel global
//quando cria uma variavel sem var, let ou const ela se torna global, NÃO FAZER ISSO, ERRO
//colocar 'use strict' no começo do codigo vai impedir esses erros
legenda = 'pt-br';

//Escopo de funçao (PAI)
//variaveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções
let carro = "Aston Martin";
function mostraCarro() {
  let frase = `O carro da Dra. Karan é um ${carro}`
  console.log(frase);
}

mostraCarro(); //O carro da Dra. Karan é um Aston Martin
console.log(carro); //Aston Martin

//Escopo de Bloco
//variaveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variavel é usando const e let, pois respeitam o escopo do bloco
if(true) {
  var carros = 'Fusca';
  console.log(carros);
};
console.log(carros); //Fusca

//EXERCICIO
// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
