import express from "express";
import mongoose from "mongoose";
import cors from  "cors";
import dotenv, { config } from "dotenv";
dotenv.config();

const  app =express ();
app.use(express.json());
app.use(cors());


 const connectDB = async () =>{
    const conn = await mongoose.connect(process.env.REACT_APP_MONGODB_URL)
    if(conn){
        console.log(`MongoDB Connected Successfully✅`)
    }
 };
 connectDB();

 app.get("/",(req,res)=>{
    res.json({
        message:`Wecome to Expense Tracker API`
    })
 })
 

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is runing on port ${PORT}`)
})