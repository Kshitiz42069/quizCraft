import User from "../models/User.js";
import bcrypt from 'bcrypt';
import sendToken from "../Utils/generateTokens.js";

export const signUp = async(req,res)=>{
    try {
        const {fullname, email, password, confirmPassword} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({message:"Password does not match"});
        }

        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({message:"User Already exist"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            fullname,
            email,
            password:hashedPassword,
        });

        if(newUser){
            await newUser.save();
            sendToken(newUser._id,res);
            res.status(200).json({
                _id:newUser._id,
                fullname:newUser.fullname,
                email:newUser.email,
            })
        }
        else{
            res.status(400).json({error:"Invalid User Data"});
        }
    } catch (error) {
        console.log("Error ", error.message);
        console.log("Sign Up Error", error);
        console.log("Error is in the signUp function");
        res.status(500).json({error:"Internal Server Error"});
    }
}


export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});

        const isPassword = await bcrypt.compare(password,user?.password || "");

        if(!user || !isPassword){
            return res.status(400).json({error:"Invalid Credentials"});
        }

        sendToken(user._id,res);

        res.status(200).json({
            _id:user._id,
            email:user.email,
            fullname:user.fullname
        });
    } catch (error) {
        res.staus(500).json({error:"Invalid Error in login"});
        console.log("Error occured in login function");
    }
}


export const logout = async(req,res)=>{
    try {
        res.cookies("jwt","",{maxAge:0});
        res.status(200).json({message:"Logout Succesful"});
    } catch (error) {
        res.status(500).json({error:"Logout Invalid"});
        console.log("Error occured in logout function");
    }
}