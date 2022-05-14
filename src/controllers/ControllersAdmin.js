const { v4 } = require('uuid')
const { customersDB, productDB } = require('../database/db')


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


module.exports = {
    createProduct,
    listProduct,
    removeProduct
}