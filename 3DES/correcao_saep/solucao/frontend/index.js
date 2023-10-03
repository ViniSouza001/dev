const options = { method: 'GET', headers: { 'User-Agent': 'insomnia/2023.5.8' } };

fetch('http://localhost:3000/alocacao/area', options)
    .then(response => response.json())
    .then(response => {
        console.table(response)
        response.forEach((area) => {
            const divAtual = document.querySelector(`#d${ area.area }`)
            divAtual.style.backgroundColor = '#0000FF'
            divAtual.style.color = '#FFFFFF'
        })
    })
    .catch(err => console.error(err));

const areas = document.querySelectorAll(".areas");
console.log(areas);