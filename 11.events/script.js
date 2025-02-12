// //addEventListener
// //Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.
// const imgs = document.querySelector('img');

// // elemento.addEventListener(event, callback, options)
// imgs.addEventListener('click', () => {
//   console.log('Clicou');
// });


// //Callback
// //É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima
// const img = document.querySelector('img');
// function callback() {
//   console.log('Clicou');
// }

// img.addEventListener('click', callback); // 🚀
// //img.addEventListener('click', callback()); // undefined
// img.addEventListener('click', () => {
//   console.log('Clicou');
// })


// //Event
// //O primeiro parâmetro do callback é referente ao evento que ocorreu.
// //Geralmente utilizam e como nome do parâmetro
// const images = document.querySelector('img');

// function callback(event) {
//   console.log(event);
// }

// images.addEventListener('click', callback);


// //Propriedades do Event
// const animaisLista = document.querySelector('.animais-lista');

// function executarCallback(event) {
//   const currentTarget = event.currentTarget; // this
//   const target = event.target; // onde o clique ocorreu
//   const type = event.type; // tipo de evento
//   const path = event.path;
//   console.log(currentTarget, target, type, path);
// };

// //animaisLista.addEventListener('click', executarCallback);


// //event.preventDefault()
// //Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.
// const linkExterno = document.querySelector('a[href^="http"]');

// function clickNoLink(event) {
//   event.preventDefault();
//   console.log(event.currentTarget.href);
// }

// //linkExterno.addEventListener('click', clickNoLink);


// //this
// //A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.
// //Geralmente igual ao event.currentTarget
// const imgm = document.querySelector('img');

// function callback(event) {
//   console.log(this); // retorna a imagem
//   console.log(this.getAttribute('src'));
// }

// imgm.addEventListener('click', callback);


// //Diferentes Eventos
// //Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também.
// //https://developer.mozilla.org/en-US/docs/Web/Events
// const h1 = document.querySelector('h1');

// function callback(event) {
//   console.log(event.type, event);
// };

// h1.addEventListener('click', callback);
// h1.addEventListener('mouseenter', callback);
// window.addEventListener('scroll', callback);
// window.addEventListener('resize', callback);
// window.addEventListener('keydown', callback);


// //Keyboard
// //Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.
// function handleKeyboard(event) {
//   if(event.key === 'a')
//     document.body.classList.toggle('azul');
//   else if(event.key === 'v')
//     document.body.classList.toggle('vermelho');
// }

// window.addEventListener('keydown', handleKeyboard);


// //forEach e Eventos
// //O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.
// const imags = document.querySelectorAll('img');

// function imgSrc(event) {
//   const src = event.currentTarget.getAttribute('src');
//   console.log(src);
// }

// imags.forEach((img) => {
//   img.addEventListener('click', imgSrc);
// });


// //EXERCICIO
// // Quando o usuário clicar nos links internos do site,
// // adicione a classe ativo ao item clicado e remova dos
// // demais itens caso eles possuam a mesma. Previna
// // o comportamento padrão desses links
const links = document.querySelectorAll('a[href^="#"]');

function handleClick(event) {
  event.preventDefault();

  links.forEach(link => link.classList.remove('ativo'));
  event.target.classList.add('ativo');
};

links.forEach((link) => {
  link.addEventListener('click', handleClick);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');
console.log(todosElementos);

function handleEvent(event) {
  event.stopPropagation();
  let clicado = event.target;
  console.log(clicado);
};

todosElementos.forEach((e) => {
  e.addEventListener('click', handleEvent);
});


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

const todosElementos = document.querySelectorAll('*');
console.log(todosElementos);

function handleEvent(event) {
  event.stopPropagation();
  event.target.remove()
};

todosElementos.forEach((e) => {
  e.addEventListener('click', handleEvent);
});


// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleClickT(event) {
  if(event.key === 't') {
    document.documentElement.classList.toggle('textomaior')
  }
};

window.addEventListener('keydown', handleClickT)
