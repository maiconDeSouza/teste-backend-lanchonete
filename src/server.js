const express = require('express')
const app = express()

const routerAdmin = require('./routes/admin')
const routerClient = require('./routes/client')


app.use(express.json())
app.use('/admin',routerAdmin)
app.use('/client',routerClient)



const port = 1992

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))