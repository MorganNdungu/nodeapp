const express=require ('express');
const Student = require('../models/students2');
const routes=express.Router();

//get alist of student from the database
routes.get ('/', async(req, res, next)=>{
        try{
                const result= await Student.find()
                res.send(result)
        }catch (error){
                console.log(error.message);
        }
});

//get students
routes.get ('/:id', async(req, res, next)=>{
        const id= req.params.id;
        try{
                const result= await Student.findById()
                res.send(result)
        }catch (error){
                console.log(error.message);
        }
});

//add or save student to the db
routes.post('/',async (req, res, next)=>{
        
        try{
                const student=new Student(req.body)
                const result= await student.save();
        
        res.send(result);
        }catch(error) {
                console.log(error.message);
        }

});

//update
routes.patch('/:id',async(req, res,next)=>{
        const id= req.params.id;
        try{
                // const id= req.params.id;
                const  student=new Student(req.body)
                const option = {new: true}
                const result=await student.findByIdandUpdate(id, Update)
        res.send(result);
        }catch(error) {
                console.log(error.message)
        }

});

//delete
routes.delete('/:id',async(req, res,next)=>{
        const id= req.params.id
        try{ 
                const student= await Student.findByIdAndRemove(id, remove)    
        res.send(student);
        }catch(error){
                console.log(error.message)
        }

});

module.exports=routes;