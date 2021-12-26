import React, { useState } from "react";

export const List = (props) => {
  const [check, setCheck] = useState(props.check);

  const isChecked = () => {
    setCheck(!check);
  };

  return (
    <div>
      {check ? (
        <div>{props.name} </div>
      ) : (
        <div className="yes">{props.name} </div>
      )}
      <button onClick={isChecked}>{check ? "not done" : "done"}</button>
    </div>
  );
};
