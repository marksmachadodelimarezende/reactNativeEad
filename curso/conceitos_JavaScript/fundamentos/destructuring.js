//Destructuring extrai de um objeto valores, um ou mais, 
//e transforma/cria as variaveis respectivas
console.log('Destructuring de objetos')
const pessoa = {
    nome: 'fulano',
    idade: 42,
    endereco: {
        logradouro: 'Rua tal',
        numero: 2
    }
}

//Para utilizar do recurso/conceito destructuring
//declara-se as variavel entre as chaves, 
//informando as propriedades a serem extraidas
const {nome, idade } = pessoa
console.log(nome, idade)

//Para extrair renomeando as variaveis
const {nome: nomeDaPessoa, idade: idadeDaPessoa} = pessoa
console.log(nomeDaPessoa, idadeDaPessoa)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//Destructuring de arrays 
console.log('Destructuring de arrays')
const [a] = [10] //No caso do destructuring de array utiliza-se colchetes []
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [1, 2, 3, 4]
console.log(n1, n3, n5, n6)

//Destructuring de funcoes
console.log('Destructuring de funcoes')
function rand({min = 0, max = 100}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min:80}))
console.log(rand({}))
console.log(rand()) //Desta forma, como na declaracao da funcao o destructuring nao tem resultado padrao, ocorrera erro /*Cannot destructure property `min` of 'undefined' or 'null'.*/
