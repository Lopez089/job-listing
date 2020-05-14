import React, { useContext, useRef } from "react";
import iconTabRemove from "./icon-remove.svg";
import "./tabRemover.scss";
import { Context } from "../../App";
import { CRef } from "../tab/tabLanguajes";

const TabRemover = () => {
  const context = useContext(Context);
  const cRef = useContext(CRef);
  const refRemove = useRef(null);
  return (
    <div
      className="tab-remover"
      onClick={() => {
        console.log(cRef.current.innerText);
      }}
    >
      <img src={iconTabRemove} alt="icon-remove" />
    </div>
  );
};

export default TabRemover;
