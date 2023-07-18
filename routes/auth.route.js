const express=require ('express');
const User = require('../models/user.model');
// const { exists } = require('../models/students2');
// const { route } = require('./api');
const createHttpError= require ('http-errors');
const bcrypt= require('bcryptjs')
const jwt=require('jsonwebtoken')
const {JWT_SECRET} = process.env;

const routes1=express.Router();



//add or save student to the db
routes1.post('/register' ,async (req, res, next)=>{
        
    try{
          
            const{email, password}=req.body;
            if(!email || !password)throw createHttpError.BadRequest();

            const Exists=await User.findOne({email:email});
            if (Exists) throw createHttpError.Conflict(`{email} is already been registered`)

            const hash=await bcrypt.hash(password,10);
           
            const user = new User({email:email,
                password:hash})

            const savedUser=await user.save()
            res.send(savedUser)

    }catch (error){
        console.log(error)
        next(error)
    }

})
routes1.post('/login', async (req, res)=>{
    const {email,password}= req.body
    try{
        //check if email is valid

        //find user by email
        const user =await User.findOne({email});
    
     if (!user){
        return res.status(401).json({message: 'user doesnot exist'})

        //  throw createHttpError.Conflict(`{email}  does not exist in our daatabase. please consider registering `);
     }
     //compare password
     const isPasswordValid= await bcrypt.compare(password,user.password)
     
     //if password does not match
     if(!isPasswordValid){
        return res.status(401).json({message: 'Invalid Password'})
     }
     //genertaiong jwt token
     const token=jwt.sign({userID:user._id, email: email },JWT_SECRET,{expiresIn: '1h'});
     

     res.status(200).json ({type:"bearer",token:token});

    }
    catch(error){
        console.error(error) 
        res.status(500).json({message: 'server error'});
    }
    // res.send('login route')
})
routes1.post('/refresh token', async (req, res)=>{
    res.send('refresh token route')
})
// routes1.get('/',async( req , res)=>{
//     res.send({type:'get request'})
// })
routes1.delete('/logout', async (req, res)=>{
    res.send('logout route')
})


module.exports = routes1;