import React from "react";
import "./tab-languaje.scss";

const TabLanguajes = (props: any) => {
  return (
    <div className="tab-languaje">
      <div className="tab-languaje--wraper-text">
        <h1 className="h2">Css</h1>
      </div>
      {props.children}
    </div>
  );
};

export default TabLanguajes;
