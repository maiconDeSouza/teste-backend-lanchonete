const { customersDB, productDB } = require('../database/db')

function singleClient(req, res, next){
    const { email, phone } = req.body

    const isValid = customersDB.some(customer => customer.email === email || customer.phone === phone)

    if(isValid){
        return res.status(200).json({
            message: "Email or Phone is already registered"
        })
    }
    next()
}


module.exports = {
    singleClient
}