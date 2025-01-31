//bloco de codigos que pode ser executado e reutilizado. valores podem ser repassados por uma função e a mesma retorna outro valor
function squareArea(side){
    return side * side;
}

squareArea(5); // 25
squareArea(8); // 64
squareArea(10); // 100

/////////////////////////

function active() {
  console.log('Function active');
}
active(); // para chamar a function active

//parametros e argumentos
//Ao criar uma função você pode definir parÂmetros. Ao executar uma função vocÊ pode passar argumentos
//peso e altura são os parametros
function imc(peso, altura){
    const imc = peso / (altura ** 2);
    return imc;
}

imc(80, 1.80); // 80 e 1.80 são os argumentos
imc(100, 2.00); // 100 e 2.00 são os argumentos

//Argumentos podem ser funções
//Chamadas de Callback, geralmente são funções que ocorrem após algum evento
addEventListener('click', function(){
    console.log('Clicou');
});
//A função possui dois argumentos, primeiro é a string 'click' e o segundo é uma função anônima.
//Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}

  //a função pode ou não retornar um valor. quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir return ou não.
  function imc2(peso, altura){
    const imc = Math.floor(peso / (altura ** 2));
    console.log(imc);
  }

  imc2(58, 1.62); // retorna o imc
  console.log(imc2(58, 1.62)); // retorna o imc e undefined

//valores retornados
//uma funcao pode retornar qualquer tipo de dado e até outras funções
//não é uma boa prática uma função que retorna diversos tipos de dados, como string e boolean
function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Informe a sua idade';
    } else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
}

//escopo
//variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele
function precisoVisitar(paisesVisitados) {
    let totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
//console.log(totalPaises); // erro, totalPaises não definido

//Escopo Léxico
//funções conseguem acessar variáveis que foram criadas no contexto pai
let profissao = 'Designer';

function dados() {
  let nome = 'André';
  let idade = 28;
  function outrosDados() {
    let endereco = 'Rio de Janeiro';
    let idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro

//Hoisting
// antes de executar uma função, o JS 'move' todas as funções declaradas para a memória
imc(80, 1.80); // imc aparece no console

function imc(peso, altura){
    const imc = peso / (altura ** 2);
    console.log(imc);
}

//EXERCICIOS
// Crie uma função para verificar se um valor é Truthy
function isTruthy(value) {
  if (!!value) {
    return 'É verdadeiro';
  } else {
    return 'É falso';
}};
console.log(isTruthy(null));
console.log(isTruthy(1));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimeterSquare(side) {
  return side * 4;
};
console.log(perimeterSquare(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function fullName(firstName, lastName) {
  return `Meu nome completo é ${firstName} ${lastName}`
}
console.log( fullName('Ylana','Oliveira'));

// Crie uma função que verifica se um número é par
function isEven(number) {
  if (number % 2 === 0) {
    return 'Is even'
  } else {
    return 'Is odd'
  }
}
console.log(isEven(3));
console.log(isEven(26));
console.log(isEven(136));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function typeOfData(data) {
  return typeof(data)
}
console.log(typeOfData(1));
console.log(typeOfData('hi'));
console.log(typeOfData({}));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback. utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.
addEventListener("click", () => {
  console.log("Ylana Leal");
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
