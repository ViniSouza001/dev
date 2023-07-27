const divHamburguer = document.querySelector('#divHamburguer')
const btnHamburguer = document.querySelector('#btnHamburguer')
const menuLateral = document.querySelector('#menuLateral')

divHamburguer.addEventListener('click', () => {
   divHamburguer.classList.toggle('active')
   menuLateral.classList.toggle('activeNav')
})

const width = window.screen.width
console.log(width);