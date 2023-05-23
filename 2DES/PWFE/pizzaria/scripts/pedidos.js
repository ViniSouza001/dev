const Itens = JSON.parse(localStorage.getItem('Itens'));
const tbody = document.querySelector('tbody');
console.log(Itens);
var total = 0;

Itens.forEach(element => {
    var tr = document.createElement('tr');
    var argumento = `
        <td>${element.id}</td>
        <td>${element.nome}</td>
        <td>${element.descricao}</td>
        <td>${element.preco}</td>
    `
    total += element.preco
    tr.innerHTML = argumento
    tbody.innerHTML += argumento;
});
console.log(total)

