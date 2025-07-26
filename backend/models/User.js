import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    examPreference:{
        type:[String],
        required:false,
        enum:['SSC','UPSC','Banking','Railways','Defence','Other']
    },
    attempts:[{
        quizId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Quiz",
        required:true
        },
        score:{
        type:Number,
        required:true
        },
        date:{
        type:Date,
        default:Date.now
        }
    }],
},{
    timestamps:true
});

const User = mongoose.model("User",userSchema);
export default User;