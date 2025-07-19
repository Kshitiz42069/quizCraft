import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config({quiet:true});

const app = express();
const Port = process.env.PORT || 8000;

//middleware
app.get('/',(req,res)=>{
    res.send("Backend is up now");
});

//mongoose connection
mongoose.connect(process.env.MongoURI)
.then(()=>{
    console.log("Mongo DB is connected");
    app.listen(Port,()=>{
        console.log(`Server is running on this ${Port}`);
    });
})
.catch((error)=> console.error("MongoDB connection error:", error));