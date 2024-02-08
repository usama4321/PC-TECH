import mongoose from "mongoose";

const connectDB = async () => {
    try{

        const conn = await mongoose.connect(process.env.MongoDB_URL);
        console.log(`Connneted`)
    }catch(error){
        console.log(`Error is ${error}`)
    }
}

export default connectDB;