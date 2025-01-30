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
