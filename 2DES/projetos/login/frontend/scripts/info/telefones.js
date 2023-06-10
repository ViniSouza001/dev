// irá buscar todos os telefones do usuário

async function fetchTelefones(id) {
    try {
        const resp = await fetch(`http://localhost:3000/telefones/${id}`, { method: 'GET' });
        const telefones = await resp.json();
        var telefone = [];
        telefones.forEach(element => {
            telefone.push(element.telefone);
        });
        var listaTelefones = telefone.splice(', ');
        return listaTelefones;
    } catch (error) {
        console.log(error);
    }
}