function calcularFatorial(fatorial) {
    let n = fatorial;
    let resultado = 1;
    if (n >= 0) {
        for (let i = 2; i <= n; i++){
            resultado *= i;
        }
        return resultado;
    } else {
        return 'Não é possível calcular o fatorial pois é negativo!'
    }
}

console.log(calcularFatorial(5));


/*
O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a esse número. É comumente representado pelo símbolo "!". Por exemplo, o fatorial de 5 (representado como 5!) é calculado como:
5! = 5 × 4 × 3 × 2 × 1 = 120
*/