class Monster {
    constructor(monsterName, monsterType) {
        this.monsterName = monsterName
        this.monsterType = monsterType
    }
}

const Smaug = new Monster('Smaug, o dragão', 'Fire')

console.log(`Os hobits foram atacados pelo temido ${Smaug.monsterName}!`)

class Pokemon {
    constructor(pokeName, pokeType, pokeHab) {
        this.pokeName = pokeName
        this.pokeType = pokeType
        this.pokeHab = pokeHab
    }
}

const Raichu = new Pokemon('Raichu', 'Eletrico', 'Estática!') // Criando pokemon.
const Blastoise = new Pokemon('Blastoise', 'Agua', 'Torrente!') // Criando pokemon.

console.table([Raichu]) // Exibir.
console.table([Blastoise]) // Exibir.

// Testando fraquezas!
function weakEletric (){
    if(Blastoise.pokeType === 'Agua' || Raichu.pokeType === 'Eletrico') {
        console.log('Seu golpe foi super efetivo!')
    } else {
        console.log('Nada efetivo!')
    }
}

// Checando fraquezas de pokémon!
weakEletric(Raichu.pokeType)

class Cadeira {
    constructor(pernas, gira, cor){
        this.pernas = pernas,
        this.gira = gira,
        this.cor = cor
    }
}
const CadeiraSimples = new Cadeira(4, false, 'preta')
console.table([CadeiraSimples])

// Criando um Array para armazenar pokémon!
let pokeBag = Array()
// Guardando pokémons na mochila!
pokeBag.push(new Pokemon('Raichu', 'Eletrico', 'Estática!'))
pokeBag.push(new Pokemon('Blastoise', 'Agua', 'Torrente!'))
pokeBag.push(new Pokemon('Gengar', 'Fantasma', 'Maldição!'))
// Verificando mochila...
console.table(pokeBag)


