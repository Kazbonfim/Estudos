// Meu primeiro desafio aritmético 😂 criar uma tabuada, do zero, apenas usando lógicas do JavaScript. Simples, mas eficiente.

let main = 3  // Mudando a variável 'main' podemos obter resultados diferentes na tabuada.
let x = 1
let y = 1
let acc = 0

while(acc < 10){
  let cross = (x * y++);
  let result = main * cross;
  console.log(`${main} * ${cross} = ${result}`);
  acc++
};

