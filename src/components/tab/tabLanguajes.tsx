import React, { useRef, useContext } from "react";
import "./tab-languaje.scss";
import { Context } from "../../App";
interface IpropsTabLanguajes {
  filter: string;
  children?: JSX.Element;
}

const TabLanguajes = (props: IpropsTabLanguajes) => {
  const { filter, children } = props;
  const Contexts = useContext(Context);
  const inputEl = useRef();
  //console.log(props);
  return (
    <div
      className="tab-languaje"
      onClick={() =>
        Contexts.setFilter([
          ...Contexts.filters,
          Contexts.filters.includes(inputEl.current.innerText)
            ? ""
            : inputEl.current.innerText,
        ])
      }
    >
      <div className="tab-languaje--wraper-text">
        <h1 ref={inputEl} className="h2">
          {filter}
        </h1>
      </div>
      {children}
    </div>
  );
};

export default TabLanguajes;
