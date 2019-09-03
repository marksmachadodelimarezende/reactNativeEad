const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 9.75, fragil: true},
    {nome: 'Copo de Plastico', preco: 2.50, fragil: false}
]
/*
console.log(produtos.filter(function(p){
    return p.preco > 1500 && p.fragil
}))
*/
const produtoCaro = e => e.preco > 1000
const produtoFragil = e => e.fragil === true

const newProdutos = produtos.filter(produtoCaro).filter(produtoFragil)
console.log(newProdutos)