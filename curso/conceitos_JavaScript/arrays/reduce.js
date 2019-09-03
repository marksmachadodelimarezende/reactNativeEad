const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 9.75, fragil: true},
    {nome: 'Copo de Plastico', preco: 2.50, fragil: false}
]

console.log(produtos.map(p => p.preco)) //Map retorna neste caso um novo  array somente com o indice preco

const total = produtos.map(p => p.preco).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 20)
console.log(total)