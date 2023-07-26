function retornaInt (parametros) {
    return 0;
}

function retornaString() {
    return 'oi';
}

function retornaParametro(parametros) {
    return parametros;
}

function procedimento(parametro) {
    setTimeout(() => console.log(parametro), 1000);
}

console.log(retornaInt());
console.log(retornaString());
console.log(retornaParametro('Um parametro qualquer'));
console.log(procedimento('um procedimento qualquer'));