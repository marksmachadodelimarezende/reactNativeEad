const express = require('express');
const app = express();

app.post('/post', (req, res) => {
    res.send('Metodo POST acessado!')
})

app.get('/get',(req, res) => {
    res.send('Metodo GET acessado!')
})

app.use((req, res) => {
    res.send('Qualquer requisicao respondida pelo "use"')
})

app.all((req, res) => {
    res.send('Qualquer requisicao respondida "all"')
})

app.listen(3000, () => {
    console.log('Backend executando!');
});