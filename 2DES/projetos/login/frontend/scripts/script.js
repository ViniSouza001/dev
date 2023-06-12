const inpEmail = document.querySelector('#email');
const inpSenha = document.querySelector("#senha");
const erro = document.querySelector('#erro');

const formulario = document.querySelector('form');
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
})

function verification() {
    const data = {
        "email": inpEmail.value,
        "senha": inpSenha.value
    }
    const options = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data)
    }
    fetch('http://localhost:3000/listar/', options)
    .then(resp => {return resp.json()})
    .then(dados => {
        if(dados.msg) {
            erro.style.display = 'block'
        } else {
            localStorage.setItem("usuario", JSON.stringify(dados))
            const stateObj = {tela: 'Perfil'}
            const title = "Perfil"
            const url = './perfil.html'
            history.replaceState(stateObj, title, url)
            location.reload()
            // window.location.href = './perfil.html'
        }
    })
}