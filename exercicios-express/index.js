const express = require('express');
const app = express();
const saudacao = require('./src/saudacaoMid')

app.use(saudacao('Marks')) //Pode ser invocada funcoes de modulos. As mesmas devem retornar funcoes middleware

app.post('/post', (req, res, next) => {
    console.log('Metodo POST acessado!')
    next()
})

app.post('/corpo', (req, res) => {
    let corpoBody = ''
    req.on('data', function(parte){
        corpoBody += parte
    })
    req.on('end', function(){
        res.send(corpoBody)
    })
})

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatorio: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.get('/clientes/:id', (req, res) => {
    //Obtendo dados por parametro dinamico, identificado na url por ":" (dois pontos). 
    //Como esta passagem de parametro é dinamica e generica, caso tenha outra url mais interna e especifica, sera necessario coloca antes desta declaracao
    res.send(`Cliente ${req.params.id} selecionado`)
})

app.get('/get', (req, res, next) => {
    res.json({
        data: [
            { id: 1, name: 'testes 1' },
            { id: 2, name: 'testes 2' },
            { id: 3, name: 'testes 3' },
            { id: 4, name: 'testes 4' },
        ]
    })
    next()
})

app.use((req, res, next) => {
    console.log('Qualquer requisicao respondida pelo "use"')
    next()
})

app.all((req, res) => {
    console.log('Qualquer requisicao respondida "all"')
})

app.listen(3000, () => {
    console.log('Backend executando!');
});