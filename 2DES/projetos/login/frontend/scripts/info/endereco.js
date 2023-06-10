// irá buscar todos os endereços do usuário

async function fetchEnderecos(id) {
    const response = await fetch(`http://localhost:3000/enderecos/${id}`, { method: 'GET' });
    const enderecos = await response.json();
    return enderecos;
}