const express = require('express')
const cors = require ('cors');
const bodyParser = require ('body-parser');
const app = express()

// MiddleWear this very important for using axios
app.use(cors({credentials:true,origin:'*', optionsSuccessStatus :200}));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

// app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// routers
const router = require('./Routes/productRouter.js')
const userRouter = require('./Routes/userRouter.js')

app.use('/api/products', router)
app.use('/api/user', userRouter)


// const router = require('./Routes/UserRouter.js')
// app.use('/api/user', router)

app.get('/api', (req, res) => {
    res.json({
        success:1,
        message:"Thi api is working"
    })
})

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