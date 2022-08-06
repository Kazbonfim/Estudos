// Paradigma de Orientação a Objetos
// Processo de Abstração de Entidade (pré-objeto)
// Paradigma Procedural
// Exemplo de serviços de marcenaria.

let qtd_pernas = 4
let giratoria = false
let cor = 'Azul'

// Sessao de cadeiras.
let cadeiras = Array()

cadeiras[0] = Array()
cadeiras[0]['Qtd. de pernas'] = 4
cadeiras[0]['Giratória'] = false
cadeiras[0]['Cor'] = 'Vermelha'
// Incluindo um novo objeto cadeira manualmente.
cadeiras[1] = Array()
cadeiras[1]['Qtd. de pernas'] = 1
cadeiras[1]['Giratória'] = true
cadeiras[1]['Cor'] = 'Preto'


function girar_cadeira (indice) {
    if(cadeiras[indice]['Giratória'] === true) {
        console.log('Sua cadeira gira.')
    } else {
        console.log('Sua cadeira não gira')
    }
}

function addCadeiras (qtd_pernas, giratoria, cor) {
    let cadeira = Array()

    cadeira[qtd_pernas] = qtd_pernas
    cadeira[giratoria] = giratoria
    cadeira[cor] = cor

    cadeiras.push(cadeira)
}

addCadeiras(4, false, 'Azul') // Criando uma cadeira usando a função.
console.table([cadeiras])

