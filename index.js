// config inicial
const express = require('express')
const app = express()

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

// entregar uma porta
app.listen(3000)
