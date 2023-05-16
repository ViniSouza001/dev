class Compra{
    constructor(id, data, produto, cliente, totalParcelas, preco, quantidade) {
        this.id = id;
        this.data = data;
        this.produto = produto;
        this.cliente = cliente;
        this.totalParcelas = totalParcelas;
        this.preco = preco;
        this.quantidade = quantidade;
        this.total = this.getTotal();
    }

    getTotal() {
        return this.preco * this.quantidade;
    }

    addParcela(parcela) {
        this.parcela.push(parcela);
    }
}

class Parcela {
    constructor(id, compra, dataVencimento, dataPagamento) {
        this.id = id;
        this.compra = compra;
        this.dataVencimento = new Date(dataVencimento);
        this.dataPagamento = dataPagamento != undefined ? new Date(dataPagamento) : undefined;
        this.valorParcela = this.getValorParcela();
        this.juros = this.getJuros()
    }

    getDiasAtrasados() {
        if( this.dataPagamento == undefined || this.dataPagamento == null) {
            return 0;
        } else if (this.dataPagamento> this.dataVencimento) {
            const diferencaMilissegundos = this.dataPagameto - this.dataVencimento
            const umDiaEmMilissegundos = 1000 * 60 * 60 * 24; // um dia tem 86.400.000 milissegundos
            return Math.floor(diferencaMilissegundos / umDiaEmMilissegundos)

        }
        else return 0;
    }
}