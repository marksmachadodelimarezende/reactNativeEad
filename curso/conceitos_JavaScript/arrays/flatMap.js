//FlatMap nao esta na API do java script.
//Sera criado no prototype do Array.
//Funcionalidade de mesclar recursos do map() e do concat()
const escola = [{
    nome: 'Manha M1',
    alunos: [{
        nome: 'Aderson',
        nota: 7.5
    },{
        nome: 'Gustavo',
        nota: 8.3        
    }]
},{
    nome: 'Tarde T1',
    alunos: [{
        nome: 'Leia',
        nota: 9.3
    },{
        nome: 'Rita',
        nota: 10  
    }]
}]

//console.log(escola)
const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)
console.log(notas1)

//Criando funcao flatmap como prototype para o Array
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)