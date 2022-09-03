const productController = require('../Controller/productController.js')
const reviewController = require('../Controller/reviewController.js')
const { checkToken } = require('../auth/token-Validation.js')

// router Product Controller
const router = require('express').Router()
// use routers
router.post('/addProduct', checkToken, productController.addProduct)
router.get('/allProducts', checkToken, productController.getAllProducts)
router.get('/published', checkToken, productController.getPublishedProduct)   
router.get('/products/:id', checkToken, productController.getOneProduct)
// Review Url and Controller
router.post('/addReview/:id', checkToken, reviewController.addReview)
router.get('/allReviews', checkToken, reviewController.getAllReviews)
router.get('/getProductReviews/:id', checkToken, productController.getProductReviews)

router.get('/:id', checkToken, productController.getOneProduct)
router.put('/:id', checkToken, productController.updateProduct)
router.delete('products/:id', checkToken, productController.deleteProduct)
// Review Url and Controller


module.exports = router