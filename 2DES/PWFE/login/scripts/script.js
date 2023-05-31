function authenticate() {
    const email = document.querySelector('#email').value;
    const senha = document.querySelector("#senha").value;
    var err = true
    dados.forEach(user => {
        if(email == user.email && senha == user.senha) {
            localStorage.setItem('usuario', JSON.stringify(user));
            window.location.href="./perfil.html"
            err = false
        }
    })
    if(err) document.querySelector('#erro').style.display = 'block'
}

