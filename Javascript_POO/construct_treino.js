class pokemon {

    constructor( nome, tipo) {
        this.nome = nome
        this.tipo = tipo
    }

    falar (){
        console.log(`Seu ${this.nome} está feliz!`)
    }

    comer (){
        console.log(`Seu ${this.nome} comeu uma maçã vermelha!`)
    }

}

let Raichu = new pokemon ('Raichu', 'Eletrico')
let Pikachu = new pokemon ('Pikachu', 'Eletrico')
let Cyndaquill = new pokemon ('Cyndaquill', 'Fogo')

console.log(Cyndaquill)

console.table(Cyndaquill)

