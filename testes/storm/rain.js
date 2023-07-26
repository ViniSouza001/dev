const pageWidth = window.innerWidth // 1366
const pageHeight = window.innerHeight // 657
const animation = document.createElement('style')
document.head.appendChild(animation)
var alturaPingo = 0
let longitudePingo = 0
var chuva = true
const buttonChuva = document.querySelector("#buttonChuva")

buttonChuva.addEventListener('click', () =>{
    if(chuva) {
        chuva = false
        buttonChuva.textContent = 'Chover'
    } else {
        chuva = true
        buttonChuva.textContent = 'Parar Chuva'
    }
    main()
})

main()
async function main() {
    while(chuva) {
        stylesPingo()
        await sleep(1000)
    }
}

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

function stylesPingo() {
    for(let i = 0; i < 100; i++) {
        const pingo = document.createElement('div')
        var widthPingo = 0
        let marginLeft = gerarNumeroAleatorio(pageWidth)
        let marginTop = gerarNumeroAleatorio(pageHeight * 2)
        let diferencaWidth = pageWidth - marginLeft
        let diferencaHeight = pageHeight - marginTop
        alturaPingo = marginTop
        longitudePingo = marginLeft
        while(widthPingo <= 5) {
            widthPingo = gerarNumeroAleatorio(15)
        }

        pingo.style.width = widthPingo + 'px'
        pingo.style.marginTop = (5 - diferencaWidth) + 'px'
        pingo.style.marginLeft = diferencaHeight + 'px'
        pingo.classList.add('pingo')
        keyframes(pingo)
        body.appendChild(pingo, marginTop, marginLeft)
        setTimeout(() => pingo.style.display = 'none', 10000);
    }
}

function keyframes(pingo) {
    let diferencaAltura = pageHeight + alturaPingo
    let diferencaLongitude = pageWidth + longitudePingo 
    
    animation.sheet.insertRule(`
    @keyframes movePingo {
        0% {
            transform: translate(0, 0) rotate(45deg);
        }
        100% {
            transform: translate(${diferencaAltura}px, ${diferencaLongitude}px) rotate(45deg);
        }
    }
    `)
    pingo.style.animation = 'movePingo 8s linear'
    
}

function clarao() {
    
}