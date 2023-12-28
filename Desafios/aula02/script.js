var nome = prompt("Digite seu nome: ")
var ano = parseInt(prompt("Em que ano você nasceu?"))
var anoAtual= new Date().getFullYear()

var idade = anoAtual - ano

console.log(`Olá, ${nome}, você possui ${idade} anos.`)