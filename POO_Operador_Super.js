class Animal {
    constructor(cor, tamanho, peso){
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }

    dormir(){
        console.log('Dormindo...zzz')
    }
}

// Extends seleciona um elemento classe/construtor para ser um 'Pai' e dessa forma herdar seus conteúdos específicos.
// O Super()

class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso){
        super(cor, tamanho, peso)
        this.bico = bico
    }

    voar (){
        console.log('Voando...')
    }

    cantar(){
        console.log('Cantando!')
    }
}


class Papagaio extends Passaro {
    constructor(bico, cor, tamanho, peso, sabeFalar){
        super(bico, cor, tamanho, peso, sabeFalar)
        this.bico = bico
        this.sabeFalar = sabeFalar
    }

    falar() {
        if(this.sabeFalar === true) {
            console.log('Seu papagaio está falando!')
            return true
        } else {
            console.log('Seu papagaio ainda não sabe falar.')
            return false
        }
        
    }
}


let Louro = new Papagaio('Medio', 'Verde', 'Pequeno', '350g', true)
console.log(Louro.falar())
