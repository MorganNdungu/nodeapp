const express=require('express');
require('dotenv').config();
require('./helper/innit_mongodb')

const studentRoutes = require('./routes/api')
const authRoutes=require('./routes/auth.route')

const cors= require ('cors')

const app=express();
const allowedOrigin=['http://localhost:3000', 'http://localhost:4000']



app.use(express.json());


// app.use(cors({
//   origin:(origin, callback)=>{
//     if(origin || allowedOrigin.includes(origin)){
//       callback(null. true)
//     }else{
//       callback(new Error('Not Allowed by cors'))
//     }
//   }
// }));
app.use('/students', studentRoutes);
app.use('/auth', authRoutes );



//handling 404
app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.send({
      error:{
        status: err.status || 500,
        message: err.message
      }
    })
})





app.listen(process.env.port || 4000, function(){
    console.log('now listening for request on:http://localhost:4000');
});