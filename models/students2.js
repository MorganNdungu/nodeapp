const mongoose= require('mongoose');

const schema= mongoose.Schema;

const studentsSchema = new schema({
    firstname:{
        type:String,
        required:[true,'firstname is required']

    },
    lastname:{
        type:String,
        required:[true, 'lastname is required']
    },
    gender:{
        type:String
    }
});
const Student = mongoose.model('student',studentsSchema);
module.exports=Student;