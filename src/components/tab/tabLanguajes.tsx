import React from "react";
import "./tab-languaje.scss";

interface IpropsTabLanguajes {
  filter: string;
  children: JSX.Element;
}

const TabLanguajes = (props: IpropsTabLanguajes) => {
  const { filter, children } = props;
  console.log(children);
  return (
    <div className="tab-languaje">
      <div className="tab-languaje--wraper-text">
        <h1 className="h2">{filter}</h1>
      </div>
      {children}
    </div>
  );
};

export default TabLanguajes;
