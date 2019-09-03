//par nome/valor - Par representa nome e valor de uma variavel.
const saudacao = 'Opa' //Contexto lexico 1

function exec(){
    const saudacao = 'falaaaa' //Outro contexo lexico (2) - apesar de a variavel ter mesmo nome do contexto global
    return saudacao
}

console.log(saudacao)
console.log(exec())