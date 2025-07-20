import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.route.js'

dotenv.config({quiet:true});

const app = express();
const corsOptions = {
    origin:"http://localhost:5173/",
    credentials:true
}

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));

//user auth
app.use('/user',authRoutes);

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