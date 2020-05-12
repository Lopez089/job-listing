import React from "react";
import iconTabRemove from "./icon-remove.svg";
import "./tabRemover.scss";

const TabRemover = () => {
  return (
    <div className="tab-remover">
      <img src={iconTabRemove} alt="icon-remove" />
    </div>
  );
};

export default TabRemover;
