var lista_frutas = Array()

lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maçã'
lista_frutas[2] = 'Morango'
lista_frutas[3] = 'Uva'

console.log(lista_frutas)

/* Além de associar á índices (os valores), podemos criar índices diversos como mais abaixo */

lista_frutas['nome'] = 'lista de frutas v1.0'
console.log(lista_frutas.nome), /* ou */ console.log(lista_frutas[1])

var lista_frutas2 = ['Banana', 'Maçã', 'Morango', 'Uva', 'Lista de Frutas v2.0']
console.log(lista_frutas2)

/* O atributo .length, dentro de Arrays(), só refletem índices que vão de 0 até determinado valor. Portanto, se um Array() gerado tiver
definições de índices que fogem do tipo number, começados de 0, ele pode não captar os valores diferentes disso ou mesmo retornar índices vázios - mas que sabemos que existem. */ 

/* Arrays Multidimensionais */

var lista_coisas = []

lista_coisas['frutas'][0] = 'Banana'
lista_coisas['frutas'][1] = 'Pera'
lista_coisas['frutas'][2] = 'Abacate'

lista_coisas['pessoas']['a'] = 'Lucas'
lista_coisas['pessoas']['b'] = 'Ethan'
lista_coisas['pessoas']['c'] = 'Ellie'

/* Como diabos acessar esses índices? */
console.log(lista_coisas['frutas'][0])
console.log(lista_coisas['pessoas']['b'])


 