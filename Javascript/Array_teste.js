
        /*    0       1        2        3      */
let array = ['Luíz', 'Maria', 'Lucas', 'Larissa']
console.log(array);

/* O método push acrescenta novos valores ao final do Array selecionado previamente, por exemplo:  */
array.push('Dudu', 'Clarice', 'Joaquina', 'Cirilo')
console.log(array[6]); /* Vamos exibir o índice 'Joaquina' */

array[0] = 'Luíz saiu da sala';

array[1] = 'Maria saiu da sala';

console.log(array[0]), console.log(array[1]), console.log(array);

/* '.unshift' acrescenta novos valores ao Array no COMEÇO */
 console.log(array[50],'  - Indice inexistente');