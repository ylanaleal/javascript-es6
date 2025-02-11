//Document Object Model (DOM)
//É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo desses documentos

console.log(window);
//window é o objeto global do browser
//possui diferentes métodos e propriedades
window.innerHeight; //retorna a altura do browser


//WINDOW E DOCUMENT
//São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades
//window.alert('Isso é um alerta');
//alert('Isso é um alerta'); //funciona

document.querySelector('h1'); //seleciona o primeiro h1
document.body //retorna o body
//window é objeto global, por isso precisamos chamar ele na frente dos seus

//NODE
//Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

// titulo.innerText; //retorna o texto
// titulo.classList; //retorna as classes
// titulo.id; //retorna o id;
// titulo.offsetHeight; //retorna a altura do elemento;

const titulo = document.querySelector('h1');

titulo.addEventListener('click', function(){
  console.log('Clicou em', titulo.innerText);
});
//ativa a função callback ao click no titulo


//EXERCICIO
// Retorne o url da página atual utilizando o objeto window
const url = window.location;
console.log(url.href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.getElementsByClassName("ativo");
console.log(ativo);

// Retorne a linguagem do navegador
const idioma = window.navigator.language;
console.log(idioma);

// Retorne a largura da janela
const viewWidth = window.innerWidth;
console.log(viewWidth);
