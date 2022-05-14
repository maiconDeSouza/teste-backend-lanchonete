const router = require('express').Router()
const Controllers = require('../controllers/ControllersClient')
const Middleware = require('../controllers/MiddlewareClient')


router.post('/',Middleware.singleClient, Controllers.createClient)


module.exports = router

