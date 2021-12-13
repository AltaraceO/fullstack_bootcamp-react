import React from "react";
import faker from "faker";

const Image = (prop) => {
  return (
    <a href="/" className="image">
      <img alt="picture" className="picture" src={prop.image} />
    </a>
  );
};

export default Image;
// {faker.image.animals()}
