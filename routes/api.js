const express=require ('express');
const Student = require('../models/students2');

const routes=express.Router();
const studentControl = require('../controller/student.control');

//get alist of student from the database
routes.get ('/', studentControl.getAllstudent);
       

//get students
routes.get ('/:id', studentControl.getStudentByid);

//add or save student to the db
routes.post('/' ,studentControl.AddStudent);
//update
routes.patch('/:id' , studentControl.UpdateStudent);
//delete
routes.delete('/:id', studentControl.DeleteStudent);


module.exports=routes;