// // Efeitos no Dom
// // Dataset

// // HTMLElement
// //Todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement.

// const h1 = document.querySelector('h1');
// Object.prototype.toString.call(h1); // [object HTMLHeadingElement]
// // HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object

// //Dataset
// //dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-.

// {/* <div data-cor="azul" data-width="500">Uma Div</div>
// <span data-anime="left" data-tempo="2000">Um Span</span> */}

// // Ambos os valores selecionam a mesma div acima.
// let div = document.querySelector('div');
// div = document.querySelector('[data-cor]');
// div = document.querySelector('[data-cor="azul"]');

// div.dataset;
// // DOMStringMap {cor: "azul", width: "500"}
// div.dataset.cor; // 'azul'
// div.dataset.width; // '500'
// div.dataset.tempo = 1000;
// // DOMStringMap {cor: "azul", width: "500", tempo: "1000"}

// // Data Atributes
// // Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS.

// {/* <div data-anima="left" data-tempo="1000">Div 1</div>
// <div data-anima="right" data-tempo="2000">Div 2</div> */}

// const divs = document.querySelectorAll('[data-anima]');
// divs.forEach((div) => {
//   div.classList.add(div.dataset.anima);
// });

// // adiciona em cada div
// // uma classe com o mesmo nome
// // que o valor de data

// // Data vs Class
// // A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada.

// // {/* <div data-anima="left" data-tempo="1000">Div 1</div>
// // <div class="anima-left tempo-1000">Div 2</div> */}

// // Nomenclatura
// // Por padrão o JavaScript não aceita - (traço) como caracter válido para nomear propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula.

// <div data-anima-scroll="left">Div 1</div>

// const div = document.querySelector('[data-anima-scroll]');
// div.dataset;
// // {animaScroll: 'left'}
// div.dataset.animaScroll; // left
// div.dataset.tempoTotal = 1000;
// // Na div vira data-tempo-total="1000"

// delete div.dataset.animaScroll; // remove o atributo

//Exercícios

// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.
// const section = document.querySelectorAll('#animais section');

// section.forEach((item) => {
//   item.dataset.anime = 'show-down';
// });

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.
