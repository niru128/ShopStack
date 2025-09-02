import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';   
import userRoutes from './routes/UserRoutes.js';
import productRoutes from './routes/ProductRoutes.js';

dotenv.config();
await connectDB();

const app = express();

app.use(cors({
    origin : "http://localhost:5173",
    credentials: true
}));


//Middleware
app.use(express.json());
app.use(cookieParser());


//Routes
app.use("/api/users" , userRoutes)
app.use("/api/products" , productRoutes)


app.get("/", (req,res)=>{
    res.send("API is running...");  
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));

