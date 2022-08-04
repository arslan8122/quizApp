const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const quiz = new Schema({
  id: Schema.ObjectId,
  options: [],
  answer: { type: String },
  question: { type: String },
});
const QuizSchema = new Schema(
  {
    id: Schema.ObjectId,

    quiz: [quiz],
  },
  { timestamps: true }
);

module.exports = mongoose.model("quiz", QuizSchema);
