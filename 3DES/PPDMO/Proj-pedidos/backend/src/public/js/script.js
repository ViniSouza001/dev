const divHamburguer = document.querySelector('#divHamburguer')
const btnHamburguer = document.querySelector('#btnHamburguer')
const menuLateral = document.querySelector('#menuLateral')
const cartIcon = document.querySelector('#cart-icon')
const closeX = document.querySelectorAll('.closeX')
const windowCart = document.querySelector('#window-cart')

divHamburguer.addEventListener('click', () => {
   divHamburguer.classList.toggle('active')
   menuLateral.classList.toggle('activeNav')
})

closeX.forEach(button => {
   button.addEventListener('click', () => {
      windowCart.classList.toggle('display-none')
   })
})

if (cartIcon) {
   cartIcon.addEventListener('click', () => {
      console.log(windowCart)
      windowCart.classList.toggle('display-none')
   })
}