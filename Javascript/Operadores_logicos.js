// && e
// || ou
// ! NÃO

var expressao1 = true
var expressao2 = true 

// Exercicio 1 
console.log(expressao1 === true && expressao2 === true ? 'Deu certo' : 'Deu errado');
console.log(expressao2 === false || expressao2 === false ? 'Deu certo' : 'Deu errado');

// Exercicio 2 
let user = 'Kazbonfim'
let password = 3207

// Um prototipo de login, por exemplo.
if (user === 'Kazbonfim' && password === 3207){
  console.log('Usuário logado!')
} else {
  console.log('Dados incorretos! Por favor tente novamente')
}
