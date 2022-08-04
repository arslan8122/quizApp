import React, { useEffect, useState } from "react";
import { getQuiz } from "../API's/quizAPIs";
import { Radio } from "antd";
import ShowMcqs from "../common/ShowMcqs";
const Test = () => {
  const [allMcqs, setAllMcqs] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const valuesReturned = await getQuiz();
    const data = await valuesReturned.json();
    console.log(data.result.quiz);
    setAllMcqs(data.result.quiz);
  };
  return (
    <div>
      <h1>Questions you created</h1>
      {allMcqs.map((item, i) => (
        <>
          <p style={{ padding: "3%" }}>{item.question}</p>
          {item.options.map((option, i) => (
            <ShowMcqs item={item} option={option} disable={false} />
          ))}
        </>
      ))}
    </div>
  );
};

export default Test;
