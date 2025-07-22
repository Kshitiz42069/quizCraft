import Quiz from "../models/Quiz.js";

export const createQuiz = async(req,res) =>{
    try {
        const {title, category, difficulty, questions, creator} = req.body;

        const quiz = new Quiz({
            title,
            category,
            difficulty,
            questions,
            creator,
        })

        await quiz.save();

        res.status(201).json({
            success: true,
            message:"Quiz created successfully",
            quiz,
        });
    } catch (error) {
        console.log("Error in the Create quiz function",error);
        res.status(500).json({error:"Internal Server Error"});
    }
};

export const getAllQuizzes = async(req,res)=>{
    try {
        const quizzes = await Quiz.find().select('-__v');

        res.status(200).json({success:true, data: quizzes});
    } catch (error) {
        console.log("Error is in the get all quiz function");
        res.status(500).json({Error:"Failed to fetch the quizzes"});
    }
}

export const getQuizById = async(req,res)=>{
    try {
        const quiz = await Quiz.findById(req.params.id);
        if(!quiz){
            return res.status(404).json({message:"Quiz not found"});
        }
        res.status(200).json({success:true, data:quiz});
    } catch (error) {
        console.log("Error is in the get Quiz by Id function");
        res.status(500).json({Error:"Failed to fetch the requested quiz"});
    }
}
export const submitQuizAnswer = async(req,res)=>{
    try {
        const {quizId, answers} = req.body;
        const quiz = await Quiz.findById(quizId);

        if(!quiz){
            return res.status(404).json({message:"Quiz not found"});
        }

        let score = 0;
        const result = quiz.questions.map((q, index)=>{
            const isCorrect = q.correctAnswerIndex === answers[index];
            if(isCorrect) score++;
            return{
                questionText: q.questionText,
                selectedAnswer: q.choices[answers[index]],
                isCorrect,
                correctAnswer: q.choices[q.correctAnswerIndex],
                explanation: q.explanation,
            };
        });

        res.status(200).json({score, total: quiz.questions.length, result});
    } catch (error) {
        console.log("Error in the submiting the quiz function");
        res.status(500).json({error:"Failed to submit the quiz"});
    }
}