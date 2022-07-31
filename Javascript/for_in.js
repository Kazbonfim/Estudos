// Vamos utilizar o laço 'for/in' para percorrer um Array.

var listaConvidados = ['Lucas', 'Diomedes', 'Paulo', 'Júnior']



// for ( varNova 'in' varAlvo) { bloco }
for( var x in listaConvidados) {
    console.log(x)

    console.log('Índice ' + x + ' Valor ' + listaConvidados[x])
};

// Se os arrays tivessem índices variados, poderíamos recuperar esses índices dessa forma e sem problemas. 
