function saudacao(nome) {
    console.log('Log de inicializacao unico') //Blocos declarados fora da funcao middleware no retorno sao executados uma unica vez.
    return function(req, res, next) {
        console.log(`Bem vindo ${nome}.`) // >> Blocos de execução dentro da função middleware sao executados a cada requisicao na api.
        //No express toda funcao usada retorna uma funcao middleware. 
        //Ela contem os parametros requisicao, resposta e next, que provoca passagem para proxima funcao com mesma identidade de url.
        next() 
    }
}

module.exports = saudacao