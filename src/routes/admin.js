const router = require('express').Router()
const Controllers = require('../controllers/ControllersAdmin')
const Middleware = require('../controllers/MiddlewareAdmin')

router.post('/products', Middleware.isAdmin, Controllers.createProduct)
router.get('/products',Middleware.isAdmin, Controllers.listProduct)
router.delete('/products', Middleware.isAdmin, Middleware.findProduct, Controllers.removeProduct)


router.get('/customers', Middleware.isAdmin, Controllers.listCustomers)

router.get('/request', Middleware.isAdmin, Controllers.listAllRequest)
router.put('/request', Middleware.isAdmin, Controllers.statusRequests)




module.exports = router