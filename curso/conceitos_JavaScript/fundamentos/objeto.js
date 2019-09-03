console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function(){}
console.log(typeof Cliente)

class Produto {} //ES 2015 (ES6) - Eco Script
console.log(typeof Produto) //Aqui imprime como Funcao no java script. Toda classe no JS é convertida na compilacao para uma funcao.
console.log(typeof new Produto() ) //Aqui, foi instanciada a classe/funcao, e com isso temos um objeto da funcao.
