const userController = require('../Controller/userController.js')

// router Product Controller
const router = require('express').Router()
// use routers
router.post('/addUser', userController.addUser)
router.get('/getallUsers', userController.getAllUser)
router.get('/:email', userController.getOneUser)

// Review Url and Controller


module.exports = router