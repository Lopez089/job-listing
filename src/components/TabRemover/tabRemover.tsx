import React, { useContext } from "react";

import "./tabRemover.scss";
import { Context } from "../../App";
import { CRef } from "../tab/tabLanguajes";
//import iconTabRemove from "./icon-remove.svg";

const TabRemover = () => {
  const context = useContext(Context);
  const cRef = useContext(CRef);
  return (
    <div
      className="tab-remover"
      onClick={() => {
        //console.log(cRef.current.innerText);
        const filter = context.filters;
        const indexRefState = filter.indexOf(cRef.current.innerText);
        filter.splice(indexRefState, 1);
        context.setFilter([...filter]);
      }}
    >
      {/* <img src={iconTabRemove} alt="icon-remove" /> */}
    </div>
  );
};

export default TabRemover;
