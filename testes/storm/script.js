var body = document.querySelector('body');
var Nuvens = document.querySelector('.nuvens');
var zindexMinimo = 0;

function gerarNuvens() {
    const largura = Nuvens.offsetWidth / 3;
    var marginLeft = 0;
    var marginTop = 0;
    let zindex = 10;
    for(let i = 0; i < 5; i++) {
        let nuvem = document.createElement('div');
        nuvem.classList.add('nuvem');
        nuvem.style.width = largura + 'px';

        if(i == 0) {
            marginLeft = 0;
            marginTop = 0;
        } else {
            marginLeft += largura - 200
            marginTop += 5
        }

        // styles
            zindex -= 1;
            nuvem.style.marginLeft = marginLeft + 'px';
            nuvem.style.zIndex = zindex;
            nuvem.style.marginTop = '-' + marginTop + 'px';
            Nuvens.appendChild(nuvem);
            zindexMinimo = zindex;
    }

    trovoar();
}

function gerarNumeroAleatorio(limite) {
  return Math.floor(Math.random() * limite);
}


function trovoar() {
    const divNuvem = document.querySelectorAll('.nuvem'); // pega todas as div's chamadas 'nuvem'
    const quantidadeNuvem = document.querySelectorAll('.nuvem').length; // 5 nuvens
    const numeroAleatorio = gerarNumeroAleatorio(quantidadeNuvem); // gera um numero aleatório
    const nuvemEscolhida = divNuvem[numeroAleatorio]; // ele escolhe uma nuvem aleatóriamente
    const bound = nuvemEscolhida.getBoundingClientRect();
    const meioNuvem = bound.left + bound.width / 2; // medida do meio da nuvem
    const nuvemBottom = bound.bottom; // eixo de baixo da nuvem
    raio(meioNuvem, nuvemBottom);
}

function raio(meioNuvem, nuvemBottom) {
    var controle = 1;
    var geradorRaio = 0;
    var bodyHeight = body.clientHeight;
    var marginTop = 0;
    for(let i = 0; i < bodyHeight; i = geradorRaio) {
        if(controle == 1) {
            const raio = document.createElement('div');
            raio.classList.add('raio');
            raio.style.top = nuvemBottom + 'px';
            raio.style.left = meioNuvem + 'px';
            if(controle % 2 == 0) {
                raio.style.transform = 'rotate(45deg)'
            } else {
                raio.style.transform = 'rotate(135deg)'
            }
            controle++;
            marginTop = nuvemBottom + 49;
            body.appendChild(raio);
            setTimeout(() => raio.style.display = 'none', 1700);
            geradorRaio += 60;
        } else {
                const raio = document.createElement('div');
                raio.classList.add('raio');
                raio.style.top = marginTop + 'px';
                raio.style.left = meioNuvem + 'px';
                if(controle % 2 == 0) {
                    raio.style.transform = 'rotate(45deg)'
                } else {
                    raio.style.transform = 'rotate(135deg)'
                }
                controle++;
                marginTop += 49;    
                body.appendChild(raio);
                setTimeout(() => raio.style.display = 'none', 1700);
                geradorRaio += 60;
        }
    }
    
}