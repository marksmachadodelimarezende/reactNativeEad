let aprovados = new Array('Amv', 'Bc','Dc') //Declaracao e instancia de array por funcao
console.log(aprovados)

aprovados = ['Amv', 'Bc','Dc'] //Declaracao convecional por array literal
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados.sort() //Aqui reordena o array

console.log(aprovados)

aprovados.splice(1, 1, 'Elemento novo 1', 'Elemento novo 2')
/* array funcao splice
* splice com 2 parametros exclui indices na quantidade de indices a serem removidos: splice(indice_referencia, qtde_indices_remover)
* splice pode tambem remover indice e adicionar valores, como exemplificado acima.
*/
console.log(aprovados)