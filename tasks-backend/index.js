const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Meu Backend - Tudo Certo');
})

app.listen(3000, () => {
    console.log('Backend executando!');
})