const alunos = [
    {nome: 'Joao',  nota: 7.80, bolsista: true},
    {nome: 'Pedro', nota: 9.00, bolsista: false},
    {nome: 'Assis', nota: 6.75, bolsista: true},
    {nome: 'Marco', nota: 5.00, bolsista: false}
]

//Todos os alunos estao aprovados - Nota maior ou igual a 6
const aprovado = a => a.nota >= 6
console.log('Existe alunos sao aprovados? ' + alunos.map(aprovado).reduce(function(acumulador, atual){
    //console.log(acumulador, atual)
    return acumulador && atual
}))

//Sabe ser existe bolsistas
const bolsista = a => a.bolsista
console.log('Existem bolsistas? ' + 
    alunos.map(bolsista).reduce(function(acumulador, atual){
        return acumulador || atual
    })
)

//Media dos alunos
const nota = a => parseFloat(a.nota / alunos.length).toFixed(2)
const media = alunos.map(nota)
console.log('Media da turma: ' + media.reduce(function(acumulador, atual){
    return parseFloat(acumulador) + parseFloat(atual)
}, 0).toFixed(2).replace('.',','))