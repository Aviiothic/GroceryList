import './configs/dotenvConfig.js'
import mongoose from "mongoose";
import Grocery from "./models/grocery.js";
import connectDatabase from "./configs/connectDatabase.js";

const dbUrl = process.env.MONGO_ATLAS_URL;
connectDatabase(dbUrl);

const smapleGrocery = [
    {
        title:"Mango",
        price:20,
        quantity:2
    },
    {
        title:"Litch",
        price:3,
        quantity:20
    },
    {
        title:"Banana",
        price:8,
        quantity:12
    }

]

const seeddata = async()=>{
    try{
        await Grocery.deleteMany();
        await Grocery.insertMany(smapleGrocery);
        console.log("data seeded");
    }catch(error){
        console.error("error while seeding data");
    }
}

seeddata();