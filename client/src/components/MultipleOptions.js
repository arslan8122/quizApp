import React, { Fragment, useState } from "react";
import { Button, Form, Select, Input, Row, Col, Radio } from "antd";
import { createQuizAPI } from "../API's/quizAPIs";
const MultipleQuestions = ({ allMcqs, mcqs, setMcqs, setAllMcqs }) => {
  ////input array
  const [form] = Form.useForm();

  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);

  const [selectQuestion, setselectQuestion] = useState("");
  const [selectAnswer, setselectAnswer] = useState("");
  const { Option } = Select;
  const onFinish = async (values) => {
    console.log(values);

    const updateMcqs = allMcqs.map((item) => {
      console.log(item);
      if (item.question == selectQuestion) {
        return {
          ...item,
          options: arr,
          answer: values.answer,
        };
      }
      return item;
    });

    console.log(updateMcqs);
    setAllMcqs(updateMcqs);
    setselectQuestion("");
    setArr(inputArr);
    form.resetFields();
  };

  const handleChange = (value) => {
    setselectQuestion(value);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const addInput = () => {
    setArr((prevState) => {
      return [
        ...prevState,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };
  const removeInput = () => {
    arr.pop();

    setArr([...arr]);
  };
  const handleChangeInput = (e, i) => {
    e.preventDefault();

    const index = i;
    setArr((s) => {
      const newArr = s.slice();

      newArr[index].value = e.target.value;

      return newArr;
    });
  };
  const handleChangeAnswer = (value) => {
    setselectAnswer(value);
  };
  return (
    <Fragment>
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
          questionSelect: "",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Questions List"
          name="questionSelect"
          rules={[
            {
              required: true,
              message: "Please select your question!",
            },
          ]}
        >
          <Select value={selectQuestion} onChange={handleChange}>
            <Option value="">Please Select Question</Option>
            {allMcqs?.map((item, key) => (
              <Option key={key} value={item.question}>
                {item.question}
              </Option>
            ))}
          </Select>
        </Form.Item>
        {selectQuestion === "" ? null : (
          <>
            <Row style={{ padding: "3%" }}>
              <Col md={8}></Col>
              <Col md={8}>
                <Button type="primary" onClick={addInput}>
                  Add Option
                </Button>
              </Col>
              <Col md={8}>
                <Button type="primary" onClick={removeInput}>
                  Delete Option
                </Button>
              </Col>
            </Row>

            {arr.map((item, i) => {
              return (
                <Form.Item
                  label={`option ${i + 1}`}
                  name={i}
                  key={i}
                  rules={[
                    {
                      required: true,
                      message: "Please input your multiple option!",
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => handleChangeInput(e, i)}
                    value={item.value}
                    name={i}
                    type={item.type}
                  />
                </Form.Item>
              );
            })}
            <Form.Item
              label="Answer"
              name="answer"
              rules={[
                {
                  required: true,
                  message: "Please select your answer!",
                },
              ]}
            >
              <Select value={selectAnswer} onChange={handleChangeAnswer}>
                <Option value="">Please Select Answer</Option>
                {arr?.map((item, key) =>
                  item.value !== "" ? (
                    <Option key={key} value={item.value}>
                      {item.value}
                    </Option>
                  ) : null
                )}
              </Select>
            </Form.Item>
          </>
        )}

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default MultipleQuestions;
