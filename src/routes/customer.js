const router = require('express').Router()
const Controllers = require('../controllers/ControllersCustomer')
const Middleware = require('../controllers/MiddlewareCustomer')


router.post('/',Middleware.singleCustomer, Controllers.createCustomer)


router.get('/products', Middleware.whichCustomer, Controllers.productList)
router.post('/product/request', Middleware.whichCustomer, Middleware.orderedItems, Controllers.req)
router.get('/product/request', Middleware.whichCustomer, Middleware.fetchOrders, Controllers.listRequests)


module.exports = router

