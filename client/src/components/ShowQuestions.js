import React, { Fragment, useState } from "react";

import ShowMcqs from "../common/ShowMcqs";

const ShowQuestions = ({ allMcqs }) => {
  return (
    <Fragment>
      {allMcqs.map((item, i) => (
        <>
          <p style={{ padding: "3%" }}>{item.question}</p>
          {item.options.map((option, i) => (
            <ShowMcqs item={item} option={option} disable={true} />
          ))}
        </>
      ))}
    </Fragment>
  );
};

export default ShowQuestions;
