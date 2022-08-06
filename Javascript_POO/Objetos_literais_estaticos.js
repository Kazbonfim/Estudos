class Produto {
    constructor(descricao, preco) {
    this.descricao = descricao
    this.preco = preco  
    }

    verDescricao() {
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

let notebook = new Produto('Notebook', 2500);
notebook.verDescricao()


// Criando um objeto literal.
// São frequentemente utilizados pois nem sempre é necessário criar classes com modelos (templates).

let produtoLiteral = {
    descricao: 'Processador AMD Ryzen 7 7500g',
    preco: 1899,
    verDescricao: function() {
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }

}

produtoLiteral.verDescricao()

