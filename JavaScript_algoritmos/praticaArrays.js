const valores = ['Banana', 'Uva', 'Pera', 'Mortadela', 'Amora'];

// valores.sort();

valores.sort(function (a, b) {
    return b - a;
});

console.log(valores);

valores.forEach(
    (element, index) => {
        console.log(`Array atual: ${element}[${index}]`);
    }
);

console.log(valores[4]);
