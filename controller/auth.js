const Users = require('../models/user')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    const { email, name, password } = req.body
    if(!email || !name || !password) {
        return res.status(400).json({success: false, message:"please provide necesary information"})
    }
    try{
        const user = await Users.create({...req.body})
        const token = user.generateToken()
        res.status(201).json({data: { name: user.name, email: user.email }, token })

    }catch(err){
        console.log(err);
        res.json(err)
    }

    }

const login = async (req, res)=> {
    const {email, password } = req.body
    if(!email || !password) {
        return res.status(400).json({success: false, message:"please provide necesary information"})
    }
    try{
        const user = await Users.findOne({ email})
        if (!user){
            return res.status(400).json({success: false})
        }
        const authenticated = await user.comparePassword(password)
        if(!authenticated) {
            return res.status(400).json({success: false})
        }
        const token = user.generateToken();
        res.status(200).json({user: { name: user.name, email: user.email}, token })

    }catch(err){
        console.log(err);
   
}
}

module.exports = { register, login }