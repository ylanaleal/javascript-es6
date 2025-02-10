//Operadores de Atribuição
let x = 5;
let y = 10;

x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

// Operador ternário
//abreviação das condicionais if e else
let idade = 31;
let podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber) // Pode beber
// condição ? true : false

//IF ELSE ABREVIADO
//não é necessario abrir e fechar as chaves {} quando retornamos apenas uma linha de código
let possuiFaculdade = true;
if (possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');
//ou
if(possuiFaculdade)
  console.log('Possui Faculdade');
else
  console.log('Não possui faculdade');


//EXERCICIO
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
let scroll = 1000;
scroll += 500

// Atribua true para a letiável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
let possuiCarro = true;
let possuiCasa = false;
let darCredito;

darCredito = (possuiCarro && possuiCasa) ? "Credito aprovado" : 'Crédito negado';
console.log(darCredito);
