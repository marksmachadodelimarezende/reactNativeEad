module.exports = (app, paramStr) => {
    function salvar(req, res) {
        res.send('Produto > Salvar > ' + paramStr)
    }

    function obter(req, res) {
        res.send('Produto > Obter > ' + paramStr)
    }

    app.post('/produto', salvar)
    app.get('/produto', obter)

    return { salvar, obter }
}