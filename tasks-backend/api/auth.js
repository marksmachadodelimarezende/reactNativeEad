const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, res) => {
        const msgResposeError = 'Dados incorretos para autenticação!'
        //console.log('Efetuando validacoes LOGIN')
        if (!req.body.email || !req.body.password) {
            return res.status(400).send(msgResposeError)
        }

        const user = await app.db('users')
            .whereRaw("lower(email) = lower(?)", req.body.email )
            .first()

        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                if (err || !isMatch) {
                    return res.status(401).send(msgResposeError)
                }

                const payload = { id: user.id }
                res.json({
                    name: user.name,
                    email: user.email,
                    token: jwt.encode(payload, authSecret),
                })
            })
        } else {
            return res.status(400).send(msgResposeError)
        }
    }

    return { signin }
}