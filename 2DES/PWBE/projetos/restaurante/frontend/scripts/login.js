const inpEmail = document.querySelector('#inpEmail');
const inpSenha = document.querySelector('#inpSenha');
const form = document.querySelector("form");
let button = document.querySelector('#btn_login');

form.addEventListener('submit', e => {
    e.preventDefault();
});

button.addEventListener('mouseenter', () => {
    if(inpEmail.value.length == 0 || inpSenha.value.length == 0) {
        button.style.cursor = 'not-allowed';
    }
});

function autenticar() {
    let data = {
        "email": inpEmail.value,
        "senha": inpSenha.value
    };

    const options = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data)
    }

    fetch('http://localhost:3000/login', options)
    .then(resp => {return resp.json()})
    .then(data => {
        if(data.id != undefined) {
            localStorage.setItem('cliente', JSON.stringify(data));

            window.location.href = "./frontend/pages/home.html";
        } else {
            alert(data.msg);
        }
    });
}