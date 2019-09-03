const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 15.50}',
    '{"nome": "Kit de Lapis", "preco": 12.25}',
    '{"nome": "Caneta", "preco": 10.00}'
]

//Retornar um array com os precos utilizando funcao map
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)