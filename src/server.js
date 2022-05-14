const express = require('express')
const cors = require('cors')

const app = express()

const routerAdmin = require('./routes/admin')
const routerCustomer = require('./routes/customer')

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}))

app.use(express.json())
app.use('/admin',routerAdmin)
app.use('/customer',routerCustomer)



const port = 1992

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))