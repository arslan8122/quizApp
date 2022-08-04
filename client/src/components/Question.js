import React, { Fragment, useEffect } from "react";
import { Button, Form, Input } from "antd";
const Question = ({ setQuestion, question, setMcqs, setAllMcqs }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
    setMcqs((prevState) => {
      return {
        ...prevState,
        question: values.name,
      };
    });
    setQuestion("");
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
          name: "",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Question"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your question!",
            },
          ]}
        >
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </Form.Item>

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

export default Question;
