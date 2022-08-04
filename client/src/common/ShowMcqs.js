import { Radio } from "antd";
import React, { useState } from "react";

const ShowMcqs = ({ item, option, disable }) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <Radio.Group onChange={onChange} value={item.answer}>
        <Radio
          disabled={disable}
          style={{ padding: "10%" }}
          value={option.value}
        >
          {option.value}
        </Radio>
      </Radio.Group>
      <br />
    </>
  );
};

export default ShowMcqs;
