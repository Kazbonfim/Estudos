let acc = 1;
let x = parseInt(prompt('Deseja ver qual número?'));

while(isNaN(x)){
  parseInt(prompt('Número inválido! Tente novamente!'));
}

while(acc <= 10){
  console.log(x + ' x ' + acc + ' = ' + (x * acc))
  acc++
}
