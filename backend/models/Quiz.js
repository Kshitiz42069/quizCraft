import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
        enum:['Politics','Science','History','Geography','Economics','Business','Other']
    },
    difficulty:{
        type:String,
        required:true,
        enum:['Hard','Moderate','Easy','Pro']
    },
    questions:[{
     questionText:{
        type:String,
        required:true
     },
     choices:{
        type:[String],
        required:true
     },
     correctAnswerIndex:{
        type:Number,
        required:true
     },
     explanation:{
        type:String,
        required:true
     }
    }],
},{
    timestamps:true
});

const Quiz = mongoose.model('Quiz',quizSchema);
export default Quiz;