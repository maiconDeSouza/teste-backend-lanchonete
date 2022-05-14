const { v4 } = require('uuid')
const { customersDB, productDB, requestDB } = require('../database/db')


function createProduct(req, res){
    const { name, price } = req.body

    const newProduct = {
        id: v4(),
        name,
        price
    }

    productDB.push(newProduct)

    res.status(201).json({
        message: "Product register successfully",
        newProduct
    })
}


function listProduct(req, res){
    res.status(200).json(productDB)
}

function removeProduct(req, res){
    const prod = req.prod

    const index = productDB.indexOf(prod)
    productDB.splice(index, 1)

    res.status(200).json({
        message:"Product Removed",
        prod
    })
    
}

function listCustomers(req, res){
    res.status(200).json({
        message:"Customer List",
        customersDB
    })
}

function listAllRequest(req, res){
    res.status(200).json(requestDB)
}

function statusRequests(req, res){
    const { idRequests } = req.headers
    const { status } = req.body

    const request = requestDB.find(req => req.idRequests === idRequests)
    request.status = status
    
    res.status(200).json(request)
}

module.exports = {
    createProduct,
    listProduct,
    removeProduct,
    listCustomers,
    listAllRequest,
    statusRequests
}