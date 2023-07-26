class Compra {
    id;
    data;
    produto;
    cliente;
    totalParcelas;
    preco;
    quantidade;
    total;
    constructor (id, data, produto, cliente, totalParcelas, preco, quantidade, total) {
        this.id = id;
        this.data = data;
        this.produto = produto;
        this.cliente = cliente;
        this.preco = preco;
        this.totalParcelas = totalParcelas;
        this.quantidade = quantidade;
        this.total = this.getTotal()
    }

    getTotal() {
        return this.preco * this.quantidade;
    }

    getDiasAtrasados(){
        
    }
}

const compras = [
    new Compra(1, '25-03-2022', 'TV LCD 4K 50" LG', 'Jair Santana', 4, 2800.00, 2),
    new Compra(2, '12/05/2022', 'TV LCD 4K 50" Samsung', 'Jurema Santana', 2, 3100.00, 1),
    new Compra(3, '25-03-2022', 'TV LCD 4K 50" LG', 'Mariana Silva', 3, 2850.00, 2),
    new Compra(4, '25-03-2022', 'TV LCD 4K 50" Samsung', 'Marta Oliveira', 5, 2899.90, 1)
]
console.log(compras);

class Parcelas {
    id;
    compra;
    dataVencimento;
    dataPagamento;
    valorParcela;
    juros;
    constructor(id, compra, dataVencimento, dataPagamento) {
        this.id = id;
        this.compra = compra;
        this.dataVencimento = dataVencimento;
        this.dataPagamento = dataPagamento;
        this.valorParcela = getValorParcela();
        juros = this.getJuros();
    }
}