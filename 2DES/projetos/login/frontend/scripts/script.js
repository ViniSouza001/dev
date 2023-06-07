function authenticate() {
    const email = document.querySelector('#email').value;
    const senha = document.querySelector("#senha").value;
    var err = true;
    dados.forEach(user => {
        if(email == user.email && senha == user.senha) {
            localStorage.setItem('usuario', JSON.stringify(user));
            // window.location.href = './perfil.html'
            const stateObj = {tela:'perfil'};
            const title= 'Perfil';
            const url = './perfil.html';
            history.replaceState(stateObj, title, url);
            location.reload();
        }
    })
    if(err) document.querySelector('#erro').style.display = 'block';
}

const formulario = document.querySelector('form');
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/listar/')
})