const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'} //Simulando array, com um objeto indexado
console.log(quaseArray)
console.log(typeof quaseArray === 'object')

Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])