// Arrays, vamos rever apenas algumas funções e métodos que utilizam Arrays em Javascript
// Começaremos em breve ;)
// Link das aulas que vamos utilizar: https://www.youtube.com/watch?v=WpL5J61vW3I, https://www.youtube.com/watch?v=241VQPFQtGA&t=2s 

// Matrizes bidimensionais 
let matriz = [
    ['Água', 'Banana', 'Uva'],
    ['Pera', 'Papel', 'Tesoura'],
    ['Doces', 'Lápis', 'Borracha']
];

// Mapeamento ARRAY
/* 
0       1      2
[dado1, dado2, dado3] 0
[dado1, dado2, dado3] 1
[dado1, dado2, dado3] 2  
[dado1, dado2, dado3] 3 
*/

// Manipulando os valores 
console.log(matriz[0][0]);

// [3]: Um algoritmo simples, que itera sobre todos os dados armazenados no array bidimensional, e os exibe no console, conforme passagem de parâmetros - vide let l, let c.
let valores = '';

for (let l = 0; l <= 2; l++) { // Iterando sobre as linhas, primeiro.[1]
    for (let c = 0; c <= 1; c++) { // Iterando sobre as colunas, segundo.[2]
        valores += matriz[l][c] + '\n'; // Adicionando á variável vazia, os valores dinâmicos, estabelecidos através do laço FOR, seguido de um 'break' literal no console - para melhor visualização.
    }
};

console.log(valores);