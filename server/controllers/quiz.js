const quiz = require("../modals/quiz");

exports.createQuiz = async (req, res) => {
  try {
    console.log(req.body);
    const item = await quiz.find({});
    var quizData;
    if (item.length > 0) {
      const updateQuiz = await quiz.updateOne(
        {},
        {
          $set: {
            quiz: req.body.quiz,
          },
        }
      );
      if (!updateQuiz) {
        res.status(500).json({
          type: "failure",
          result: "Server not Responding. Try Again",
        });
        return;
      } else {
        res.status(200).json({
          type: "success",
          result: "Quiz has been added Successfully",
        });
      }
    } else {
      quizData = new quiz();
      quizData.quiz = req.body.quiz;

      quizData.save(async (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ type: "failure", result: "Server Not Responding" });
        } else {
          res.status(200).json({
            type: "success",
            result: "Quiz has been added Successfully",
          });
        }
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ type: "failure", result: "Server not Responding. Try Again" });
  }
};
exports.GetQuiz = async (req, res) => {
  try {
    const item = await quiz.findOne({});
    res.status(200).json({ type: "success", result: item });
  } catch (error) {
    res
      .status(500)
      .json({ type: "failure", result: "Server not Responding. Try Again" });
  }
};
