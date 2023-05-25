const Itens = JSON.parse(localStorage.getItem('Itens'));
const tbody = document.querySelector('tbody');
console.log(Itens);
var total = 0;

Itens.forEach(element => {
    // criar uma nova linha para a tabela
    var tr = document.createElement('tr');
    
    // formata a data
    var dataHora = new Date(element.dataHora);
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    var dataFormatada = dataHora.toLocaleDateString('pt-BR', options);

    var imagem = document.createElement('img')
    imagem.src = '../assets/trash.png'

    // adiciona as tags em HTML
    var argumento = `
    <td>${element.pizza.nome}</td>
    <td>${element.pizza.descricao}</td>
    <td>${dataFormatada}</td>
    <td>R$ ${element.pizza.preco}</td>
    `;
    argumento += `<td>${imagem.outerHTML}</td>`
    total += element.pizza.preco // calcula o preço total do pedido
    tr.innerHTML = argumento
    tbody.innerHTML += argumento;
});

var trTotal = document.createElement('tr');trTotal
trTotal.innerHTML = `
    <td></td>
    <td></td>
    <td>Total:</td>
    <td>R$${total.toFixed(2)}</td>
`
tbody.appendChild(trTotal);

const removerPedido = () => {

}

