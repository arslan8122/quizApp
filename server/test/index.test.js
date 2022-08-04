var request = require("supertest");
var chai = require("chai");
// var assert = chai.assert;    // Using Assert style
var expect = chai.expect;

var app = require("../index");

// import Quiz from "../modals/quiz";
const tempData = [
  {
    question: "Yes are you doing",
    answer: "No",
    options: [{ value: "wow" }, { value: "wow" }],
  },
  {
    question: "What are you doing",
    answer: "No",
    options: [{ value: "wow" }, { value: "wow" }],
  },
];

before(function (done) {
  this.timeout(3000);
  setTimeout(done, 2000);
});

describe("POST Quiz", () => {
  it("should Create Quiz", (done) => {
    request(app)
      .post("/quiz/createquiz")
      .send(tempData)
      .expect(200)
      .then((res) => {
        expect(res.body.type).to.be.eql("success");
        done();
      })
      .catch((err) => done(err));
  });
  it("should get Quiz", (done) => {
    request(app)
      .get("/quiz/getquiz")
      .expect(200)
      .then((res) => {
        expect(res.body.type).to.be.eql("success");
        done();
      })
      .catch((err) => done(err));
  });
});
