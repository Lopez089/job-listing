import React from "react";
import "./card.scss";

const Card = (props: any) => {
  return <article className="card">{props.children}</article>;
};
export default Card;
