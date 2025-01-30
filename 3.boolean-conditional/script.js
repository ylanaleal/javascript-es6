//boolean
let admin = true;
let notAdmin = true;
if(admin) {
    console.log("You are an admin");
} else if(notAdmin) {
    console.log("You are not an admin");
} else {
    console.log("You are not an admin");
}

//conditional
let myAge = 18;
if(myAge < 18) {
    console.log("You can't drink");
} else {
    console.log("You can drink");
}

let nome = "";
if(nome) {
    console.log(`Nome: ${nome}`);
} else {
    console.log("Nome não informado");
}

let graduated = false;
if(!graduated) {
    console.log("Not graduated");
}

//comparação
10 > 5; //true
5 > 10; //false
20 < 10; //false
10 <= 10; //true
10 >= 11; //false

10 == 10; //true
10 == "10"; //true
10 === "10"; //false
10 === 10; //true
10 != 15; //true
10 !== '10'; //true
10 !== 10; //false

//operadores lógicos
//se ambos valores forem true, irá retornar o ultimo valor verificado. Se algum valor for false, irá retornar o mesmo e não irá verificar o próximo
true && true; //true
true && false; //false
false && true; //false
'Gato' && 'Cachorro'; //Cachorro
(5 - 5) && (5 + 5); //0
'Gato' && false; //false
(5 >= 5) && (3 < 6); //true

// || vai sempre retornar o primeiro valor verdadeiro que encontrar
true || true; //true
true || false; //true
false || true; //true
'Gato' || 'Cachorro'; //Gato
(5 - 5) || (5 + 5); //10
'Gato' || false; //Gato
(5 >= 5) || (3 < 6); //true

//switch verifica se uma variável é igual a idferentes valores utilizando o case. caso ela seja igual, vocÊ pode fazer alguma coisa e utilizar a palavra-chave break; para cancelar a continuação. O valor default ocorrerá caso nenhuma das anteriores seja verdadeira
let corFavorita = 'Magenta';
switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu');
    break;
  case 'Roxo':
    console.log('Olhe para o cartão do nubank');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol');
    break;
  default: //caso nenhuma seja verdadeira acontece isso
    console.log('Feche os olhos');
}

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let myAge = 31;
let sisterAge = 36;

if(myAge > sisterAge) {
  console.log('A idade da minha irmã é maior');
} else if  (myAge === sisterAge) {
  console.log('A idade da minha irmã é igual');
} else {
  console.log('A idade da minha irmã é menor');
};

// Qual valor é retornado na seguinte expressão?
let expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao); //3

// Verifique se as seguintes variáveis são Truthy ou Falsy
let nome = 'Andre'; //true
let idade = 28; //true
let possuiDoutorado = false; //false
let empregoFuturo; //false
let dinheiroNaConta = 0; //false

// Compare o total de habitantes do Brasil com China (valor em milhões)
let brasil = 207;
let china = 1340;
if(brasil > china) {
  console.log('Brasil tem mais habitantes');
} else {
  console.log('Brasil tem menos habitantes');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} //Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} //Cão
