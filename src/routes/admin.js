const router = require('express').Router()
const Controllers = require('../controllers/ControllersAdmin')
const Middleware = require('../controllers/MiddlewareAdmin')

router.post('/product', Middleware.isAdmin, Controllers.createProduct)
router.get('/product',Middleware.isAdmin, Controllers.listProduct)
router.delete('/product', Middleware.isAdmin, Middleware.findProduct, Controllers.removeProduct)


module.exports = router