var valorEmprestimo = parseFloat(prompt("Digite o valor do emprestimo: "))
var taxaJurosMensal = parseFloat(prompt("Digite o valor da taxa de juros mensal: "))
var numeroParcelas = parseInt(prompt("Digite o número de parcelas: "))


let valorParcela = valorEmprestimo / numeroParcelas;


for (let i = 1; i <= numeroParcelas; i++) {
    console.log(`Parcela ${i}: R$ ${valorParcela.toFixed(2)}`);
    
  
    valorParcela *= (1 - taxaJurosMensal);
}
