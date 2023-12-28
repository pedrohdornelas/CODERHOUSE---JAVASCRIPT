class Aluno {
    constructor(nome, idade, serie, nota) {
        this.nome = nome;
        this.idade = idade;
        this.serie = serie;
        this.nota = nota;
    }

    apresentar() {
        if (this.nota >= 7) {
            console.log(`O aluno ${this.nome}, ${this.idade} anos, da ${this.serie} série, foi aprovado com média: ${this.nota}`);
        } else {
            console.log(`O aluno ${this.nome}, ${this.idade} anos, da ${this.serie} série, foi reprovado com média: ${this.nota}`);
        }
    }
}

const aluno1 = new Aluno("Ana Clara", 15, "1ª", 8);
const aluno2 = new Aluno("Paulo", 16, "2ª", 6);

aluno1.apresentar();
aluno2.apresentar();
