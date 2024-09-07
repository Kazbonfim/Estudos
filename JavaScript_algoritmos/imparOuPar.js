// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0](array with a zero).

function paraOuImpar(array) {
    // Verificar se o  Array está vazio, e tratar como se fosse 0
    if (array.lenght === 0) {
        array = [0]
    }

// Calcular a soma do Array
const soma = array.reduce((acc, num) => acc + num, 0);

if (soma % 2 === 0) {
    return 'Par'
} else {
    return 'Ímpar'
}
}

console.log(paraOuImpar([4, 6, 9])) // Ímpar
console.log(paraOuImpar([2, 2])) // Par

// V2
function paraOuImpar2(array) {
    return array.reduce((a, b) => a + b, 0) % 2 ? 'Par' : 'Ímpar'
}

console.log(paraOuImpar2([1, 2]));