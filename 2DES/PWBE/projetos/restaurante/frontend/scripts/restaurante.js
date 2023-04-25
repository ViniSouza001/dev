var id = localStorage.getItem('id_restaurante');

fetch(`http://localhost:3000/restaurante/${id}`)
.then(info => { return info.json() })
.then(data => {
    console.log(data);
})