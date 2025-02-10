//ARRAY
//é um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável

let videoGames = ['Switch', 'PS4', 'Xbox'];

videoGames[0] //Switch
videoGames[2] //Xbox
videoGames.pop(); //remove o ultimo item da array e retorna ele
videoGames.push('Super Nintendo');

//FOR LOOP
//é mais comum
//fazem algo repetidamente até que uma condicao seja atingida
for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
} //retorna de a 9 no console
//O for loop possui 3 partes: inicio, condicao e incremento

//WHILE LOOP
// var i = 0;
while (i <10) {
  console.log(i);
  i++;
} //retorna 1 a 9 no console

//outro exemplo
let videoGames2 = ['Switch', 'PS4', 'Xbox', 'Super Nintendo'];
for (var i = 0; i < videoGames2.length; i++) {
  console.log(videoGames2[i]);
}

//BREAK
let videoGames3 = ['Switch', 'PS4', 'Xbox', 'Super Nintendo'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames3[i]);
  if(videoGames3[i] === 'PS4') {
    break;
  }
}

//forEACH
//método que executa uma funcao para cada item da array. forma mais simples de usar um loop com arrays
let videoGames4 = ['Switch', 'PS4', 'Xbox', 'Super Nintendo'];
videoGames4.forEach(function(item, index, array) {
  console.log(item, index, array);
});
//o argumento item sera atribuido dinamicamente

//EXERCICIO
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let copa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i < copa.length; i++) {
  console.log(`O brasil ganhou a copa de ${copa[i]}`);
  };

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
  if(frutas[i] === 'Pera') {
    break;
  }
};

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultimaFruta = frutas.at(-1);
