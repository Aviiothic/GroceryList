import products from '../data/products.js'
import Grocery from '../models/grocery.js';


const getGrocerlyList = async (req,res)=>{
    const groceryItems = await Grocery.find();
    res.json(groceryItems);
}

export default getGrocerlyList;