const express=require('express');
require('dotenv').config();
require('./helper/innit_mongodb')

const routes=require('./routes/api');
const app=express();

const studentRoutes = require('./routes/api')

app.use('/students', studentRoutes);



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



app.use(routes);


app.listen(process.env.port || 4000, function(){
    console.log('now listening for request on:http://localhost:4000');
});