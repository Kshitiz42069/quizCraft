import express from "express";
import { createQuiz, getAllQuizzes, getQuizById, submitQuizAnswer } from "../controllers/quiz.controller.js";

const router = express.Router();

router.post('/',createQuiz)
router.get('/:id', getQuizById);
router.post('/submit',submitQuizAnswer);
router.get('/',getAllQuizzes);

export default router;