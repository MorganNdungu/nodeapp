const express=require ('express');
const routes=express.Router();

//get alist of student from the database
routes.get ('/', (req, res, next)=>{
    res.send({type:'get Request'});
});

//add student to the db
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
routes.put('/:id',(req, res,next)=>{
        res.send({type:'update Request'});

});

//delete
routes.delete('/:id',(req, res,next)=>{
        res.send({type:'delete Request'});

});

module.exports=routes;