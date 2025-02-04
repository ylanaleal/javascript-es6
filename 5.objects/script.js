//objetos
//conjunto de variaveis e funcoes que sao chamadas de propriedades e metodos
//propriedades e metodos consistem em nome(chave) e valor

let pessoa = {
  nome: "Lucas",
  idade: 30,
  profissao: "programador",
  possuiFaculdade: true,
};

pessoa.nome; //Lucas
pessoa.possuiFaculdade; //true


//métodos
//é uma propriedade que possui uma função no local do seu valor
let quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.lados); //4
console.log(quadrado.area(5)); //25
console.log(quadrado.perimetro(5)); //20

//pra que serve o objeto?
//para organizar o codigo em pequenas partes reutilizaveis
//math é um objeto nativo de javascript
Math.PI; //3.14159
Math.random(); //numero aleatorio

let pi = Math.PI;
console.log(pi); //3.14159

//criar um objeto
//um objeto é criado utilizando chaves {}
//dot notation get
//acessar propriedades de um objeto utilizando o ponto
let menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

let bg = menu.backgroundColor; //"#84E"
menu.backgroundColor = "#000"; //mudar o valor de uma propriedade
menu.color = "blue"; //criar uma nova propriedade

//palavra-chave this
//this irá fazer uma referência ao proprio objeto
let height = 120;
let menu2 = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};

menu2.metadeHeight(); //25
//sem o this seria 60

//prototiypes e herança
//o objeto herda propriedades e metodos do objeto que foi utilizado para criar o mesmo
let menus = {
  width: 800,
};

menus.hasOwnProperty("width"); //true
menus.hasOwnProperty("height"); //false
//hasOwnProperty é um metodo de Object

//EXERCICIO
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo

let ylana = {
  firstName: 'Ylana',
  lastName: 'Leal Melo de Oliveira',
  age: 31,
  profession: 'developer',
  city:  'brasilia',
  pet: 'amora',
  fullName: function() {
   console.log(`Olá, meu nome completo é ${this.firstName} ${this.lastName}`)
}}
console.log(ylana.fullName())

// Modifique o valor da propriedade preco para 3000
let carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
console.log(carro.preco = 3000);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
let cachorro = {
  raca: "labrador",
  cor: 'preto',
  idade: 10,
  lateVerHumano: true,
}

cachorro.lateVerHumano //true
