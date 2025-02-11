// Retorne no console todas as imagens do site
const images = document.querySelectorAll('img');
console.log(images);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="./assets/img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector('.animais-descricao h2')
console.log(h2.innerHTML);

// Selecione o último p do site
const p = document.querySelectorAll('p');
console.log(p[--p.length]);
