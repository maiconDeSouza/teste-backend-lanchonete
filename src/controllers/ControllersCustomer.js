const { v4 } = require('uuid')

const { customersDB, productDB, requestDB } = require('../database/db')

function createCustomer(req, res){
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

function productList(req, res){
    res.status(200).json(productDB)
}


function req(req, res){
    const orderedItems = req.orderedItems
    
    requestDB.push(orderedItems)
    res.status(201).json(orderedItems)
}

function listRequests(req, res){
    const requests = req.requests

    res.status(200).json(requests)
}
module.exports = {
    createCustomer,
    productList,
    req,
    listRequests
}