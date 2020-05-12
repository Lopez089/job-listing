import React from "react";
import "./wrapper.scss";

const Wrapper = (props: any) => {
  return <div className="wrapper">{props.children}</div>;
};

export default Wrapper;
