var listaFuncionarios = ['Viviane', 'Rosangela', 'Lucas', 'Fernanda']

listaFuncionarios.forEach(function(valor, indice, array) {
    // A lógica será executada para cada índice, em ordem: valor, indice, array.
    console.log('Índice: ' + indice + ' | Valor: ' + valor)

    // Dessa forma, percorremos todos os índices contidos dentro do parâmetro 'array'.
    console.log(array)

    // Dessa forma, podemos comparar um valor em especifíco dentro do array e, em seguida, alterar o mesmo para um novo valor.
    if(valor == 'Lucas') {
        array[indice] = 'Um novo valor'
    }

});
