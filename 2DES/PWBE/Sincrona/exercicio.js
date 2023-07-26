const dados = require('./dados.js');

async function laco() {
    for(let i = 0; i < dados.length; i++) {
        await calculaContabilidade(dados[i])
    }
}

function calculaContabilidade(dado) {
    return new Promise(res => {
        setTimeout(() => {
            const montante = dado.aporte + (dado.aporte * dado.juros);
            var acumulador += montante;
            console.log(`Mês: ${dado.mes} - Total: ${montante.toFixed(2)}`);
            res();
        }, 1000)
    })
}

laco();