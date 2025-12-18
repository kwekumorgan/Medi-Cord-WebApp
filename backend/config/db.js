import mongoose from "mongoose";

const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('database connected successfully');

    }catch(error){
        console.error("Database connection failed:", error.message);
        process.exit(1) // stop app if database connection fails

    }

    
};


export default connectDB;