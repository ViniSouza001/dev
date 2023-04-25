axios.post('http://localhost:3000/imovel', {
    "corretor_id": 1,
    "codigo": "APT456789",
    "endereco": "Rua do coqueiro, 57",
    "valor_aluga": 5000,
    "status_id": 1
})
.then(resp => {
    console.log(resp);
}).catch(err => { 
    console.log(err);
});


axios.get('http://localhost:3000/imoveis')
.then((resp)=> {
    console.log(resp.data);
    resp.data.forEach((element)=>{
        console.log(element);
    })
}).catch((err)=> {
    console.log(err);
});