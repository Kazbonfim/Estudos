// Um circuito digital pode ser representado por três maneiras distintas: representação gráfica, expressão booleana e tabela - verdade.A tabela - verdade a seguir apresenta os valores resultantes na saída S, quando são aplicados todos os valores possíveis nas entradas A e B de uma determinada porta lógica.

// E (AND): &&, OU (OR): ||, NÃO (NOT): !

// Entrada A: 0, 0, 1, 1
// Entrada B: 0, 1, 0, 1
// Saída   S: 0, 1, 1, 1    

function tabelaVerdade1(a, b) {
    const resultado = a || b;
    return resultado ? 1 : 0; 
}
// console.log(tabelaVerdade(0, 0));
// console.log(tabelaVerdade(0, 1));
// console.log(tabelaVerdade(1, 0));
// console.log(tabelaVerdade(1, 1));


// Entrada A: 0, 0, 1, 1
// Entrada B: 0, 1, 0, 1
// Saída   S: 0, 0, 0, 1

function tabelaVerdade1(a, b) {
    const resultado = a && b;
    return resultado ? 1 : 0; 
}

// console.log(tabelaVerdade1(0, 0));
// console.log(tabelaVerdade1(0, 1));
// console.log(tabelaVerdade1(1, 0));
// console.log(tabelaVerdade1(1, 1));

// Analise a situação a seguir:
// O cofre de uma agência bancária tem uma lógica de funcionamento na qual só pode ser aberto se uma chave interruptora, localizada na cabine de segurança do banco, estiver desligada.
// Assinale a alternativa que apresenta a porta lógica mais adequada para controlar o circuito digital do cofre dessa agência.

// E (AND): &&, OU (OR): ||, NÃO (NOT): !

function cofreBanco(a, b) {
    const resultado = a || b;
    if (resultado == true) {
        console.log('O cofre está aberto');
    } else {
        console.log('O cofre ainda está fechado!');
        
    }
};

// console.log(cofreBanco(1, 1));

// Um exemplo prático do uso da porta lógica NAND pode ser dado por um circuito programado para ativar um alarme em uma linha de produção caso alguma de suas esteiras de alimentação de peças pare de funcionar.O alarme não será ativado apenas quando todas as esteiras estiverem em operação, ou seja, todos os sensores em tensão ALTO, valor binário 1. Caso contrário, o alarme será ativado, ou seja, algum dos sensores em tensão BAIXO, valor binário 0. 

function alarmeFabrica(a, b) {
    const resultado = 
}
