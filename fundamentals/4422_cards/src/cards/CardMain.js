import React from "react";
import Caption from "./Caption";
import Image from "./Image";
import Links from "./Links";
import Title from "./Title";

const CardMain = (prop) => {
  return (
    <div className="main-card">
      <Image image={prop.image} />
      <div>
        <Title text={prop.heading} />
        <Caption text={prop.captions} />
      </div>
      <br />
      <br />
      <Links linktext={prop.linktext} /> <Links linktext={prop.linktext} />
    </div>
  );
};

export default CardMain;
