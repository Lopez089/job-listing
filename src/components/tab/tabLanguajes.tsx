import React, { useRef, useContext } from "react";
import "./tab-languaje.scss";

interface IpropsTabLanguajes {
  filter: string;
  children?: JSX.Element;
}

const TabLanguajes = (props: IpropsTabLanguajes) => {
  const { filter, children } = props;
  //const Contexts = useContext(Context);
  const inputEl = useRef();
  // console.log(children);
  return (
    <div
      className="tab-languaje"
      onClick={() => console.log(inputEl.current.innerText)}
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
