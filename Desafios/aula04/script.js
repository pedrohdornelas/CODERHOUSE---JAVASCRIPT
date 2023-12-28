function solicitarNome() {
    var nome = prompt("Nome do aluno:");
    alert(`Olá, ${nome}, seja bem-vindo!`);
    return nome; 
}

var nomeAluno = solicitarNome(); 

var notaMatematica = parseFloat(prompt("Qual foi sua nota em Matemática?"));
var notaLinguagens = parseFloat(prompt("Qual foi sua nota em Linguagens?"));
var notaNatureza = parseFloat(prompt("Qual foi sua nota em Ciências da Natureza?"));
var notaHumanas = parseFloat(prompt("Qual foi sua nota em Humanas?"));

var calcularMedia = (notaMatematica, notaLinguagens, notaNatureza, notaHumanas) => 
  (notaMatematica + notaLinguagens + notaNatureza + notaHumanas) / 4;

var media = calcularMedia(notaMatematica, notaLinguagens, notaNatureza, notaHumanas);

var verificarSituacao = (media) => {
    if (media >= 7) {
        alert(`${nomeAluno}, você foi aprovado! Sua média final foi ${media}`);
    } else {
        alert(`${nomeAluno}, você foi reprovado!Sua média final foi ${media}`);
    }
}

verificarSituacao(media);

