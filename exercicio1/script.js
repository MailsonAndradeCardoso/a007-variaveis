//# Exercício 1

//#a
/*const nome
//#b
let idade
//erro - variaveis nome e idade sem valor definido!
//#c
console.log(typeof nome)
console.log(typeof idade)
//#d
//resposta: para indentificar os tipos de variavel */
//#e
const nome = prompt("Qual o seu nome?")
let idade = prompt("Qual sua idade?")
//#f
console.log(nome)
console.log(idade)

console.log(typeof nome)
console.log(typeof idade)
//nome atribuido como string/ idade atribuido como string
//#g
console.log("Ola nome", nome, "você tem", idade,"anos!" )
//script ok