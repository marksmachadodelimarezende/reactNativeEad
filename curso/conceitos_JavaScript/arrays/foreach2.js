Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['A1','A2','A3', 'A4']

aprovados.forEach2(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
    //console.log(array)
})
