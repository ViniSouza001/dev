let tbody = document.querySelector('tbody');
let thead = document.querySelector('thead');
let tdCount = thead.querySelectorAll('th').length;
let td = document.querySelectorAll('td');

fetch('http://localhost:3000/')
.then(info => {return info.json()})
.then(data => {
    console.log(data)
    formatar(data);
});

function formatar(data) {
    for(element of data) {
        let { id, restaurante, categoria, nota } = element;
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td onclick='addListeners(${id})'>${restaurante}</td>
        <td onclick='addListeners(${id})'>${categoria}</td>
        <td onclick='addListeners(${id})'>${nota}</td>
        `
        tbody.appendChild(tr);
        
    }
}

function addListeners(element) {
    localStorage.setItem('id_restaurante', element);
    window.location.href = "./restaurante.html"
}