function inverterLista(valor){
    const n = Math.floor(valor.length / 2);
    for (let i = 0; i < n; i++) {
        const temp = valor[i];
        valor[i] = valor[valor.length - i - 1];
        valor[valor.length - i - 1] = temp;
    }
    return valor;
}

// Exemplo de uso:
const lista = [1, 2, 3, 4, 5];
console.log("Lista Original:", lista);
console.log("Lista Invertida:", inverterLista(lista));