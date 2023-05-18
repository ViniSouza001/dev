const main = document.querySelector('main');
adicionarCard();
function adicionarCard() {
    cardapio.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <h1>${element.nome}</h1>
        <div class="info">
            <p>${element.descricao}</p>
            <footer>
                <h3>${element.preco}</h3>
            </footer>
    `
    main.appendChild(card);
    console.log(card)
    });
    
}