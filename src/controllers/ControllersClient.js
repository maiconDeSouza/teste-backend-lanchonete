const { v4 } = require('uuid')

const { customersDB, productDB } = require('../database/db')

function createClient(req, res){
    const { name, email, phone, address} = req.body

    const newClient = {
        id:v4(),
        name,
        email,
        phone,
        address
    }

    customersDB.push(newClient)

    res.status(201).json({
        message: "Customer Registered Successfully",
        newClient
    })
}



module.exports = {
    createClient
}