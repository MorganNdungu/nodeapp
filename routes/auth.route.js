const express=require ('express');
const User = require('../models/user.model');
// const { exists } = require('../models/students2');
// const { route } = require('./api');
const createHttpError= require ('http-errors');

const routes1=express.Router();



//add or save student to the db
routes1.post('/:regester' ,async (req, res, next)=>{
        
    try{
            // const register=new Register(req.body)
            // const result= await register.save();
            const{email, password}=req.body;
            if(!email || !password)throw createHttpError.BadRequest();

            const exist=await User.findOne({email:email})

            if (exists) throw createHttpError.conflict(`{email} is already been registered`)
            const user = new User({email,password})

            const saveduser=await user.save()
            res.send(saveduser)

    }catch (error){
        console.log(error)
        next(error)
    }

route.post('/login', async (req, res)=[
    res.send('login route')
])
route.post('/refresh token', async (req, res)=[
    res.send('refresh token route')
])
route.delete('/logout', async (req, res)=[
    res.send('logout route')
])
})

module.exports=route