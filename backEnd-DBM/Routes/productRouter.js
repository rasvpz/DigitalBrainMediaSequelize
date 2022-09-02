const productController = require('../Controller/productController.js')
const reviewController = require('../Controller/reviewController.js')

// router Product Controller
const router = require('express').Router()
// use routers
router.post('/addProduct', productController.addProduct)
router.get('/allProducts', productController.getAllProducts)
router.get('/published', productController.getPublishedProduct)   
router.get('/products/:id', productController.getOneProduct)
// Review Url and Controller
router.post('/addReview/:id', reviewController.addReview)
router.get('/allReviews', reviewController.getAllReviews)
router.get('/getProductReviews/:id', productController.getProductReviews)

router.get('/:id', productController.getOneProduct)
router.put('/:id', productController.updateProduct)
router.delete('products/:id', productController.deleteProduct)
// Review Url and Controller


module.exports = router