import React from "react";

export const List = ({ name, idx, func }) => {
  const onHandleChange = (name) => {
    func(name);
  };

  return (
    <div>
      {name} <input onChange={() => onHandleChange(name)} type="checkbox" />
    </div>
  );
};
