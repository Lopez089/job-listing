import React from "react";
import "./card.scss";

const Card = (props: any) => {
  return <article className="card featured">{props.children}</article>;
};
export default Card;
