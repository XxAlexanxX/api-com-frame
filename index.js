// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Person = require('./models/Person')

// forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rota incial / end point
app.get('/', (req, res) => {
    
    // mostrar req

    res.json({ message: 'Oi  Express!' })    
})

// mongodb+srv://PabloRodrigues:syO8Oz7JwGV4LX8r@apicluster.lnnlhv7.mongodb.net/bancodaapi?retryWrites=true&w=majority

// entregar uma porta
const DB_USER = 'PabloRodrigues'
const DB_PASSWORD = encodeURIComponent('syO8Oz7JwGV4LX8r')

mongoose
.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.lnnlhv7.mongodb.net/?retryWrites=true&w=majority`,
    )
.then(() => {
    console.log("Conectamos ao MongoDB!")
    app.listen(3000)

})
.catch((err) => console.log(err))


