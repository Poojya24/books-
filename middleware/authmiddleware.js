const JWT = require("jsonwebtoken");
const authmiddleware = (req, res, next) => {
const authHeader=req.headers.authorization;
 if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({message :"authentication required"})
}
const token =authHeader.split(" ")[1];
 
 try{
    const decoded=JWT.verify(token,process.env.JWT_SECRET);
    req.user =decoded ;
next();
 }catch(error){
     
   return res.status(403).json({message:"exprired token"});}
 };
 module.exports=authmiddleware;