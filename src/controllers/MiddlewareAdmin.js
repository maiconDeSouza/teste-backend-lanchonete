const { customersDB, productDB, admin } = require('../database/db')

function isAdmin(req, res, next){
    const { email } = req.headers
    
    const isValid = admin.some(ad => ad.email === email)

    if(isValid){
        return next()
    }

    res.status(402).json({
        message:"Without permission"
    })
}


function findProduct(req, res, next){
    const { id } = req.headers

    const product = productDB.find(prod => prod.id === id)

    if(product){
        req.prod = product
        return next()
    }
    res.status(402).json({
        message:"Product not found"
    })
}


module.exports = {
    isAdmin,
    findProduct
}