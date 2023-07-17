const mongoose= require('mongoose');

const schema= mongoose.Schema;

const usersSchema = new schema({
    email: {
        type: String,
        require: [true, 'email is required'],
        unique: true,
        lowercase: true,
     },
    
    password:{
        type: String,

        required:[true, 'password is required']
    }
});
const User = mongoose.model('user',usersSchema);
module.exports=User;