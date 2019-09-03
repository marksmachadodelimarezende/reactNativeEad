const pilotos = ['Vettel','Alonso','Raikkonen','Massa']

pilotos.pop() //Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona um elemento ao final do array
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Airton') //Adiciona um elemento na primeira posicao do array. Sobe numeracao de indice dos demais elementos
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas','Massa') //Adiciona valores em uma determinada posicao no splice - primeiro parametro
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //pega os elementos a partir do indice informado e retorna
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 2) //Pega os elementos a paritr do indice informado, mas em uma quantidade determinada
console.log(algunsPilotos2)