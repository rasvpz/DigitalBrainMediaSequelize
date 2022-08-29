const express = require('express')
const cors = require('cors')
const app = express()

var corOptions = {
    origin: 'https://localhost:8080'
}

// MiddleWear
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// routers
const router = require('./Routes/productRouter.js')
app.use('/api/products', router)

// TESTING API
app.get('/', (req, res) => {
    res.json({message:'Helo im from the server'})
})

// PORT
const PORT = process.env.PORT || 8080

// SERVER
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})