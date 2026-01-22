const  mongoose=require( "mongoose"); 

const connectdb = async()=>{
    try{
const connection=await mongoose.connect(process.env.MONGO_URI);
 console.log(`mongoose connect on ${connection.connection.host  }` );
    }catch(error){
console.error("Mongoose connection failed:", error.message );
process.exit(1);
    }
};

module.exports=connectdb;