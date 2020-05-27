function salvar(req, res) {
    res.send('Usuario > Salvar');
}

function obter(req, res) {
    res.send('Obter > Salvar');
}

module.exports = { salvar, obter }