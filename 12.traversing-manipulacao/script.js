//outerHTML, innerHTML e innerText
//Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.
const menu = document.querySelector('.menu');

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada


//Trasversing
//Como navegar pelo DOM, utilizando suas propriedades e métodos.
const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho


//Element vs Node
//Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.
//Geralmente estamos atrás de um elemento e não de qualquer node em si.

const lista3 = document.querySelector('.animais-lista');

lista3.previousElementSibling; // elemento acima
lista3.previousSibling; // node acima

lista3.firstChild; // primeiro node child
lista3.childNodes; // todos os node child


//Manipulando Elementos
//É possível mover elementos no dom com métodos de Node.
const lista2 = document.querySelector('.animais-lista');
const contato2 = document.querySelector('.contato');
const titulo2 = contato.querySelector('.titulo');

contato.appendChild(lista2); // move lista-2 para o final de contato
contato.insertBefore(lista2, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista2, titulo); // substitui titulo por lista


//Novos Elementos
//Podemos criar novos elementos com o método createElement()
const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);


//Clonar Elementos
//Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()
//true sinaliza para incluir os filhos
const titulo = document.querySelector('h1');
const titulo3 = document.querySelector('h1');
const novoTitulo = titulo;
// titulo, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo.cloneNode(true);
const contato = document.querySelector('.contato');
contato.appendChild(cloneTitulo);



//Exercício
// Duplique o menu e adicione ele em copy
const menuAtual = document.querySelector('.menu');
const copy = document.querySelector('.copy');
console.log(menuAtual);
const cloneMenu = menuAtual.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
console.log(faq);
const primeiroDt = faq.querySelector('dt');


// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling;
console.log(proximoDD);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;
