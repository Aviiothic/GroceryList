import mongoose from 'mongoose';

const connectDatabase = async (url)=>{
    try{
        await mongoose.connect(url);
        console.log("Database Connected");
    }catch(error){
        console.error("Error connecting to the database");
    }
}

export default connectDatabase;