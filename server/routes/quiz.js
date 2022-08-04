const express = require("express");
const quizController = require("../controllers/quiz");

const router = express.Router();

router.post("/createquiz", quizController.createQuiz);
router.get("/getquiz", quizController.GetQuiz);

exports.routes = router;
