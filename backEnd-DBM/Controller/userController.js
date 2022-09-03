const db = require('../Models')
const { genSaltSync, hashSync, compareSync} = require("bcrypt")
const { sign } = require('jsonwebtoken')
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
    let email = req.body.email
    let password = req.body.password
    let logedUser = await User.findOne({ where: { email: email }})
    if(logedUser) {
        const result = compareSync(password, logedUser.password)
        if(result){
            const jsonwebtoken = sign({ result:result.password}, 'dbm123', {
                expiresIn: '1hr'
            })
            return res.json({
                success:1,
                messegae: logedUser,
                token:jsonwebtoken,
            })
             
            }else{
                res.status(404).send('Password not match user')
            }
        }
        else{
            res.status(404).send('User name not match user')
        }
}

module.exports = {
    addUser,
    getAllUser,
    getOneUser
}