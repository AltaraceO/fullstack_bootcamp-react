import React, { useState } from "react";

export const Text = ({ text, max }) => {
  const [expand, setExpand] = useState(false);
  const [btnText, setBtnText] = useState("Read more");

  const readMore = () => {
    setExpand(!expand);
    expand ? setBtnText("Read more..") : setBtnText("Read less..");
  };

  return (
    <div>
      <div>{text.slice(0, max)}</div>
      <span onClick={() => readMore()}>{btnText}</span>
      {expand && <div>{text.slice(max)}</div>}
    </div>
  );
};
