const productController = require('../Controller/productController.js')


// router
const router = require('express').Router()
// use routers
router.post('/addProduct', productController.addProduct)
router.get('/allProducts', productController.getAllProducts)
router.get('/published', productController.getPublishedProduct)
router.get('/:id', productController.getOneProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)
// Review Url and Controller


module.exports = router