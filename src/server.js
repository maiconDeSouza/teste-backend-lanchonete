const express = require('express')
const app = express()

const routerAdmin = require('./routes/admin')
const routerCustomer = require('./routes/customer')


app.use(express.json())
app.use('/admin',routerAdmin)
app.use('/customer',routerCustomer)



const port = 1992

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))