// Exemplos de console.log que existem 
const foo  = { name: 'Lucas', age: 30, nervous: false }
const barz  = { name: 'Thomas', age: 45, nervous: true }
const baz  = { name: 'Angela', age: 19, nervous: false }

// Bad Code 💩
console.log(foo)
console.log(barz)
console.log(baz)

// Good Code 🧐

console.log({foo, barz, baz})
// Dessa forma exibimos todos os conteúdos contidos dentro dos objetos e de forma mais legível - além de enconomizar linhas de código e gestos repetitivos para exibir os conteúdos.

console.table([foo, barz, baz])
// Dessa forma exibimos todos os conteúdos em um formato 'tabela'. Segue o mesmo padrão do anterior, então...


