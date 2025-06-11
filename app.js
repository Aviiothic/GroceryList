import express from 'express';
import connectDatabase from './configs/connectDatabase.js'
import groceryListRoutes from './routes/groceryList-route.js'

const app = express();

const dbUrl = process.env.MONGO_ATLAS_URL;
connectDatabase(dbUrl);

app.use(express.json());

app.get('/', (req,res)=>{
    res.statusCode=200;
    res.send("Hello World");
});

app.use('/groceries', groceryListRoutes);

export default app;