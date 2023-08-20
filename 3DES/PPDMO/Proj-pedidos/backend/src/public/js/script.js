const divHamburguer = document.querySelector('#divHamburguer')
const btnHamburguer = document.querySelector('#btnHamburguer')
const menuLateral = document.querySelector('#menuLateral')
const cartIcon = document.querySelector('#cart-icon')
const closeX = document.querySelectorAll('.closeX')
const windowCart = document.querySelector('#window-cart')
const paraEntrega = document.querySelector("#paraEntrega");
const complemento = document.querySelector('.complemento')
const confirmar = document.querySelector('.confirmar')
const btnConfirmarPedido = document.querySelector('#btnConfirmarPedido')

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
      windowCart.classList.toggle('display-none')
   })
}

function abrirForm () {
   confirmar.classList.remove('display-none')
   fetch('http://localhost:8081/addPedido', { method: 'POST' })
}

paraEntrega.addEventListener('click', () => {
   complemento.classList.toggle('display-none')
})

function closeForm () {
   confirmar.classList.add('display-none')
}