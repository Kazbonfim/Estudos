class Animal {
    constructor(){
        this.cor = ''
        this.tamanho = null
    }

    dormir(){
        console.log('Dormindo...zzz')
    }
}

class Cachorro extends Animal {
    constructor(){
        super()
        this.orelhas = 'Grandes e Caídas'
    }

    correr(){
        console.log('Correr')
    }



    rosnar(){
        console.log('Rosnando!')
    }

};

class Passaro extends Animal {
    constructor(){
        super()
        this.bico = 'Curto e fino'
    }

    voar (){
        console.log('Voando...')
    }

    cantar(){
        console.log('Cantando!')
    }
}


let Cachorro1 = new Cachorro()
console.log(Cachorro1)
Cachorro1.dormir()

let Passaro1 = new Passaro()
console.log(Passaro1)
Passaro1.voar()




