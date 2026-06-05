import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connection Successfull✅")
    } catch (error) {
        console.error(`Error: ${error.message}`);        
    }
}

export default connectDB;