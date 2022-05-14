const { customersDB, productDB, requestDB } = require('../database/db')
const { v4 } = require('uuid')


function singleCustomer(req, res, next){
    const { email, phone } = req.body

    const isValid = customersDB.some(customer => customer.email === email || customer.phone === phone)

    if(isValid){
        return res.status(200).json({
            message: "Email or Phone is already registered"
        })
    }
    next()
}

function whichCustomer(req, res, next){
    const { email } = req.headers

    const isValid = customersDB.some(customer => customer.email === email)

    if(isValid){
      return  next()
    }

    res.status(402).json({
        message:"Email not registered"
    })
}


function orderedItems(req, res, next){
    const { request } = req.body
    const { email } = req.headers

    const customer = customersDB.find(customer => customer.email === email)

    const ordem = {
        idRequest: v4(),
        data: `${new Date().getDay()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
        name: customer.name,
        idCustomer: customer.id,
        item:[],
        value:0,
        status: "Pedente"
    }

    request.forEach(req => {
        const item = productDB.find(prod => prod.id === req.product)
        
        ordem.item.push(item)
    })

    ordem.item.forEach(prod => {
        request.forEach(req => {
            if(req.product === prod.id){
                prod.amount = req.amount
                prod.total = Number((prod.price * req.amount).toFixed(2))
            }
        })
    })

    ordem.value = ordem.item.reduce((acc, item) =>{
        return acc += item.total
    },0)

    

    req.orderedItems = ordem
    next()
}

function fetchOrders(req, res, next){
    const { email } = req.headers

    const customer = customersDB.find(customer => customer.email === email)

    const requests = requestDB.filter(req => {
        return req.idCustomer === customer.id
    })

    req.requests = requests

    next()

}

module.exports = {
    singleCustomer,
    whichCustomer,
    orderedItems,
    fetchOrders
}