import React, { Fragment } from "react";
import { Button, Col, Row } from "antd";
import { useEffect, useState } from "react";
import MultipleOptions from "./MultipleOptions";
import Question from "./Question";
import ShowQuestions from "./ShowQuestions";
import { Link } from "react-router-dom";
import { createQuizAPI } from "../API's/quizAPIs";
import Swal from "sweetalert2";
const Home = () => {
  const [question, setQuestion] = useState("");
  const [mcqs, setMcqs] = useState({
    question: "",
    options: [],
    answer: "",
  });
  const [allMcqs, setAllMcqs] = useState([]);

  useEffect(() => {
    if (mcqs.question !== "") {
      setAllMcqs((prevState) => {
        const newState = Array.from(prevState);
        newState.push(mcqs);
        return newState;
      });
    }
  }, [mcqs]);
  const submitQuiz = async () => {
    if (allMcqs.length === 0) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        confirmButtonColor: "#1890ff",
      });
    }
    const valuesReturned = await createQuizAPI(allMcqs);
    const data = await valuesReturned.json();

    if (data.type === "success") {
      setAllMcqs([]);
      Swal.fire({
        // text: "Anonymous funding ",
        title: "Question Sheet has been created Succesfully",
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "Ok",
      });
    } else {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        confirmButtonColor: "#1890ff",
      });
    }
  };
  return (
    <Fragment>
      <Row style={{ marginTop: "5%" }}>
        <Col span={12}>
          <Row>
            <Col md={24}>
              <h3 style={{ textAlign: "center" }}>Quiz Questions</h3>
            </Col>
          </Row>
          <Row style={{ marginTop: "5%" }}>
            <Col md={24}>
              <Question
                setMcqs={setMcqs}
                question={question}
                setQuestion={setQuestion}
                setAllMcqs={setAllMcqs}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "5%" }}>
            <Col md={24}>
              <MultipleOptions
                setMcqs={setMcqs}
                mcqs={mcqs}
                allMcqs={allMcqs}
                setAllMcqs={setAllMcqs}
              />
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
            }}
          >
            <Button type="primary" onClick={submitQuiz}>
              Submit Quiz
            </Button>
          </Row>
        </Col>
        <Col span={12}>
          <Row>
            <Col md={6}></Col>
            <Col md={10}>
              <h3 style={{ textAlign: "center" }}>Preview Questions</h3>
              <ShowQuestions allMcqs={allMcqs} />
            </Col>
            <Col md={6}></Col>
          </Row>
          <Row>
            <Col md={6}></Col>
            <Col
              md={10}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "5%",
              }}
            >
              <Link to="/test">
                <Button type="primary">Get Quiz</Button>
              </Link>
            </Col>
            <Col md={6}></Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Home;
