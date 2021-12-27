import React from "react";

export const Categories = ({ list, func }) => {
  const makeList = () => {
    return list.map((el, i) => {
      return (
        <button key={i} onClick={() => func(el)}>
          {el}
        </button>
      );
    });
  };

  return <div>{list && makeList()}</div>;
};
