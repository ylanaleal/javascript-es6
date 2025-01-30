//numeros exponenciais
let exponential = 2e10; // 20000000000
let exponential2 = 2e-2 // 0.02
console.log(exponential);

//operadores aritméticos
let sum = 100 + 50; //150
let sub = 100 - 50; //50
let mult = 100 * 2; //200
let div = 100 / 2; //50
let mod = 14 % 5; //4
let pot = 2 ** 4; //16
console.log(sum, sub, mult, div, mod, pot);

//verificar se variavel é NaN
let number = 'test';
console.log(isNaN(number)); //true

//operadores unários
let x = 5;
console.log(++x); //6
console.log(x); //6

let y = '5';
+y; //5 - transforma em número
-y; //-5 - transforma em número e inverte o sinal
