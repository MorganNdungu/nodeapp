const express=require ('express');
const User = require('../models/user.model');
// const { exists } = require('../models/students2');
// const { route } = require('./api');
const createHttpError= require ('http-errors');

const routes1=express.Router();



//add or save student to the db
routes1.post('/register' ,async (req, res, next)=>{
        
    try{
            // const register=new Register(req.body)
            // const result= await register.save();
            const{email, password}=req.body;
            if(!email || !password)throw createHttpError.BadRequest();

            const Exists=await User.findOne({email:email});
            if (Exists) throw createHttpError.Conflict(`{email} is already been registered`)
            const user = new User({email,password})

            const savedUser=await user.save()
            res.send(savedUser)

    }catch (error){
        console.log(error)
        next(error)
    }

routes1.post('/login', async (req, res)=>{

    res.send('login route')
})
routes1.post('/refresh token', async (req, res)=>{
    res.send('refresh token route')
})
routes1.get('/',async( req , res)=>{
    res.send({type:'get request'})
})
routes1.delete('/logout', async (req, res)=>{
    res.send('logout route')
})
})

module.exports = routes1