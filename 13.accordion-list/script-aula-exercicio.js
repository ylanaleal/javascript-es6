// // Retorne no console todas as imagens do site
// const images = document.querySelectorAll('img');
// console.log(images);

// // Retorne no console apenas as imagens que começaram com a palavra imagem
// const imagensAnimais = document.querySelectorAll('img[src^="./assets/img/imagem"]');
// console.log(imagensAnimais);

// // Selecione todos os links internos (onde o href começa com #)
// const links = document.querySelectorAll('[href^="#"]');
// console.log(links);

// // Selecione o primeiro h2 dentro de .animais-descricao
// const h2 = document.querySelector('.animais-descricao h2')
// console.log(h2.innerHTML);

// // Selecione o último p do site
// const p = document.querySelectorAll('p');
// console.log(p[--p.length]);

// //FOREACCH
// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item, index, array) {
//   console.log(item, index)
// });

// //forEach e Array
// //forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.
// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function(item){
//   console.log(item);
// });

// //Arrow Function
// //Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item) => {
//   console.log(item);
// });

// //Parâmetros e Parênteses
// const imgs = document.querySelectorAll('img');

// // parâmetro único não precisa de parênteses
// imgs.forEach(item => {
//   console.log(item);
// });

// // multiplos parâmetros precisam de parênteses
// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// // sem parâmetro precisa dos parênteses, mesmo vazio
// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// //Return
// //É possível omitir as chaves {} para uma função que retorna uma linha.
// //Não é permitido fechar a linha com ;
// const imgs = document.querySelectorAll('img');

// imgs.forEach(item =>
//   console.log(item)
// );

// imgs.forEach(item => console.log(item));

//EXERCICIO

//// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

//classList
//Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.
const menu = document.querySelector('.menu');

menu.className; // string com o nome das classes
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');

//attributes
//Retorna uma array-like com os atributos do elemento.
const animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

//getAttribute e setAttribute
//Métodos que retornam ou definem de acordo com o atributo selecionado
//É muito comum métodos de get e set;
const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo

//Read Only vs Writable
//Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.
//Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''
const animais2 = document.querySelector('.animais');

animais2.className; // string com o nome das classes
animais2.className = 'azul'; // substitui completamente a string
animais2.className += ' vermelho'; // adiciona vermelho à string
animais2.attributes = 'class="ativo"'; // não funciona, read-only


//EXERCICIO
// Adicione a classe ativo a todos os itens do menu
const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach((item) => {
  item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItems.forEach((item) => {
  item.classList.remove('ativo');
});
menuItems[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img');
imagens.forEach((img) => {
  const possuiAttr = img.hasAttribute('alt');
  console.log(img, possuiAttr);
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');
console.log(link);


//Height e Width
//Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only
//Mesma coisa para o Width, clientWidth ...
const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

//offsetTop e offsetLeft
const section = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;


//getBoundingClientRect()
//Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

//Window
window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}


//matchMedia();
//Utilize um media-querie como no CSS para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

//Dica
// Selecione o elemento no inspetor (dom)
// Abra o console e digite $0 para selecionar o mesmo
// Os elementos selecionados anteriormente são $1, $2 ...


//EXERCICIO
// Verifique a distância da primeira imagem
// em relação ao topo da página
const distanciaImg = document.querySelector('img');
const imgTop = distanciaImg.offsetTop;
console.log(imgTop);

// Retorne a soma da largura de todas as imagens
window.onload = function() {
  const somaImagens = document.querySelectorAll('img');
  let soma = 0;
somaImagens.forEach((item) => {
  soma = soma + item.offsetWidth
});
  console.log(soma);
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const dimLinks = document.querySelectorAll('a');
dimLinks.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;

  if(linkHeight >= 48 && linkWidth >= 48) {
    console.log(link, 'Possui acessibilidade')
  } else {
    console.log(link, 'Não possui acessibilidade')
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;
if(browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
};
