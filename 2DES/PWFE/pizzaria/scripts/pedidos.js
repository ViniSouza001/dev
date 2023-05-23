const Itens = JSON.parse(localStorage.getItem('Itens'));
const tbody = document.querySelector('tbody');
console.log(Itens);
var total = 0;

Itens.forEach(element => {
    var tr = document.createElement('tr');
    var argumento = `
        <td>${element.pizza.nome}</td>
        <td>${element.pizza.descricao}</td>
        <td>${element.dataHora}</td>
        <td>${element.pizza.preco}</td>
    `
    total += element.pizza.preco
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

