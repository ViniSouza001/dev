const divHamburguer = document.querySelector('#divHamburguer')
const btnHamburguer = document.querySelector('#btnHamburguer')
const menuLateral = document.querySelector('#menuLateral')
const cartIcon = document.querySelector('#cart-icon')
const windowCart = document.querySelector('#window-cart')

divHamburguer.addEventListener('click', () => {
   divHamburguer.classList.toggle('active')
   menuLateral.classList.toggle('activeNav')
})

// cartIcon.addEventListener('click', () => {
//    console.log('clicked cart icon');
// })