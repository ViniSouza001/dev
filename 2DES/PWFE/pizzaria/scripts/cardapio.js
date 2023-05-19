const body = document.querySelector('body');
const main = document.querySelector('main');

adicionarCard();
function adicionarCard() {
    cardapio.forEach((element, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <h1 onclick="displays()" >${element.nome}</h1>
        <div class="info">
            <p>${element.descricao}</p>
            <footer>
                <h3>R$ ${element.preco}</h3>
            </footer>
    `
    main.appendChild(card);
    })
}

function displays() {
    const window = document.querySelector('.window');
    window.classList.toggle('hidden');
    body.classList.toggle('notOverflow');
}

function showInformations(posicao) {
    const window = document.querySelector('.window');
    const existingInfo = document.getElementById('informacoes');
    
    // Remover informações existentes, se houver
    if (existingInfo) {
        window.removeChild(existingInfo);
    }
    let informacoes = document.createElement('div');

    // remover o conteúdo anterior da janela
    informacoes.innerHTML = '';

    informacoes.innerHTML = `
        <p>${cardapio[posicao].id}</p>
        <p>${cardapio[posicao].nome}</p>
        <p>${cardapio[posicao].descricao}</p>
        <p>${cardapio[posicao].preco}</p>    
    `;
    window.appendChild(informacoes);
}
