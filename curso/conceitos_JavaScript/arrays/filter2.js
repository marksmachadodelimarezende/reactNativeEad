Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 9.75, fragil: true},
    {nome: 'Copo de Plastico', preco: 2.50, fragil: false}
]

const produtoCaro = e => e.preco > 1000
const produtoFragil = e => e.fragil === true

const newProdutos = produtos.filter2(produtoCaro).filter2(produtoFragil)
console.log(newProdutos)