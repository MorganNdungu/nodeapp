const Student=require('../models/students2');

module.exports={
    
    getAllstudent: async(req, res,next)=>{
        try{
            const result= await Student.find()
            res.send(result)
    }catch (error){
            console.log(error.message);
    }
    },
    getStudentByid: async(req, res, next)=>{
        const id= req.params.id;
        try{
                const result= await Student.findById()
                res.send(result)
        }catch (error){
                console.log(error.message);
        }
    },
    AddStudent:  async (req, res, next)=>{
        
        try{
                const student=new Student(req.body)
                const result= await student.save();
        
        res.send(result);
        }catch(error) {
                console.log(error.message);
        }
    },
    UpdateStudent: async(req, res,next)=>{
        const id= req.params.id;
        try{
                const id= req.params.id;
                const  student=new Student(req.body)
                const update= req.body;
                const option = {new: true}
                const result=await Student.findByIdandUpdate(id, update, option)
        res.send(result);
        }catch(error) {
                console.log(error.message)
        }
    },
    DeleteStudent: async(req, res,next)=>{
        const id= req.params.id
        try{ 
                const student= await Student.findByIdAndRemove(id)    
        res.send(student);
        }catch(error){
                console.log(error.message)
        }
    }
}

