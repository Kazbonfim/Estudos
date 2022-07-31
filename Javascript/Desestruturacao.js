// Atribuição via desestruturação de objetos (ADO)

// Temos um Array e precisamos atribuir os valores selecionados á uma variável.
const numeros = [500, 1000, 1500, 2000, 2500, 3000]
console.log(numeros) // Exibição apenas.


// Para isso atribuímos a uma variável os índices que queremos, em uma ordem, e em seguida afirmamos que se tratam de índices dentro da variável alvo, veja...
const [primeiroNumero, segundoNumero, terceiroNumero] = numeros
console.log(primeiroNumero, segundoNumero)


// E se quisermos pegar o resto dos índices? Veja, podemos fazer dessa forma.
const [primeiroNumero1, segundoNumero1, terceiroNumero1, ...Resto] = numeros
console.log(Resto) // Veja que o JS já detectou que 'resto' se trata de uma variável, logo, temos conteúdo dentro dele.


// Mas e se quisermos PULAR os valores que queremos que sejam atribuídos?
const [Um, ,Dois, ,Tres] = numeros 
console.log(Um, Dois, Tres) // Você vai ver que faltam os números: 1000, 2000, 3000.


// Uma situação adversa, onde os arrays ficam em mais índices e de forma tabelada.
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const complexo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(`Dessa forma acessamos o índice selecinado na tabela >>> ${complexo[0][2]}`)
// E como diabos desestruturamos isso? Simples!
const [lista1, lista2, lista3] = complexo
console.log(`Dessa forma acessamos o índice selecinado na tabela >>> ${lista1[1]}`)

console.table([complexo])




