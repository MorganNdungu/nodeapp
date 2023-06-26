const express=require ('express');
const routes=express.Router();

//get alist of student from the database
routes.get ('/students', (req, res)=>{
    res.send({type:'get Request'});
});

//add student to the db
routes.post('/students',(req, res)=>{
        res.send({type:'post Request'});

});

//update
routes.put('/students',(req, res)=>{
        res.send({type:'update Request'});

});

//delete
routes.delete('/students',(req, res)=>{
        res.send({type:'delete Request'});

});

module.exports=routes;