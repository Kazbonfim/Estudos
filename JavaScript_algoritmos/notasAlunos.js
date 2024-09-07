const notas = [10, 8, 5, 3, 10];
let soma = 0;
let media = 0;

calcularNotas();

function calcularNotas() {
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    media = soma / notas.length;
    console.log(`A média é de: ${media.toFixed(2)}`);
}