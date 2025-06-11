import { Schema, model } from "mongoose";

const grocerySchema = new Schema(
    {
        title:{
            type:String,
            required: true
        },
        price:{
            type:Number,
            required:true
        },
        quantity:{
            type:Number,
        }
    }
)

const Grocery=model("Grocery",grocerySchema);
export default Grocery;