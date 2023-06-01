const inpFormula = document.querySelector('#formula');

function calcular() {
    const formula = inpFormula.value;
    const vetor = formula.split(''); // "3", "x", " ", "=", " ", "2"
    
    const divResultado = document.querySelector('#resultados')
    divResultado.innerHTML = `
        X = -1 | Y = ${calculo1(vetor)}
        <br>
        X = 0 | Y = ${calculo2(vetor)}
        <br>
        X = 1 | Y = ${calculo3(vetor)}
    
    `
}

const calculo1 = (vetor) => {
    let conta = 0
    vetor.forEach((element, index) => {
        if(element == 'x') {
            element = -1
            if(isNaN(Number(vetor[index - 1]))) conta += element // se o elemento anterior for um sinal
            else conta *= element // se o elemento anterior for um número multiplicando
        } else if (!isNaN(parseInt(element))) { // se o elemento for um número
            conta += parseInt(element); 
        } else { // se o elemento não for um número (um sinal de +, -, *, /);
            if(index == 0)
                conta = element
            else 
                conta += element
        }
    })
    var resultado = eval(conta);
    return resultado
}

const calculo2 = (vetor) => {
    let conta = 0
    vetor.forEach((element, index) => {
        if(element == 'x') {
            element = 0
            if(isNaN(Number(vetor[index - 1]))) conta += element // se o elemento anterior for um sinal
            else conta *= element // se o elemento anterior for um número multiplicando
        } else if (!isNaN(parseInt(element))) { // se o elemento for um número
            conta += parseInt(element); 
        } else { // se o elemento não for um número (um sinal de +, -, *, /);
            if(index == 0)
                conta = element
            else 
                conta += element
        }
    })
    var resultado = eval(conta);
    return resultado
}

const calculo3 = (vetor) => {
    let conta = 0
    vetor.forEach((element, index) => {
        if(element == 'x') {
            element = 1
            if(isNaN(Number(vetor[index - 1]))) conta += element // se o elemento anterior for um sinal
            else conta *= element // se o elemento anterior for um número multiplicando
        } else if (!isNaN(parseInt(element))) { // se o elemento for um número
            conta += parseInt(element); 
        } else { // se o elemento não for um número (um sinal de +, -, *, /);
            if(index == 0)
                conta = element
            else 
                conta += element
        }
    })
    var resultado = eval(conta);
    return resultado
}