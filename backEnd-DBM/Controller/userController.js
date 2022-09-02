const db = require('../Models')
const { genSaltSync, hashSync} = require("bcrypt")
// model
const User = db.users
// functions
//1. Add Review
const addUser = async (req, res) => {
    const salt = genSaltSync(10)
    req.body.password = hashSync(req.body.password, salt)
    let data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password:req.body.password
    }
    const register = await User.create(data)    
    res.status(200).send(register)
}



// 2. Get All Reviews
const getAllUser = async (req, res) => {

    try{
        const register = await Register.findAll({})
        res.status(200).send(register)
    }   catch(err)
    {
        console.log(err)
    }    
}

// 3. get one user

const getOneUser = async (req, res) => {
    let email = req.params.email
    let logedUser = await User.findOne({ where: { email: email }})
    res.status(200).send(logedUser)

}

module.exports = {
    addUser,
    getAllUser,
    getOneUser
}