const jwt=require('jsonwebtoken');
const {JWT_SECRET}= process.env;

const authmiddleware= (req, res, next)=>{
    // check if the authorization header is present
    const token=req.headers.authorization;

    if (!token){
        return res.status(401).json({message:'unauthorized'});
    }
    try{
        //verify token
        const decoded= jwt.verify(token,JWT_SECRET);
        req.user=decoded;
        next();
    }catch{
        return res.status(401).json({message:'invalid token'});
    }
};
module.exports=authmiddleware;