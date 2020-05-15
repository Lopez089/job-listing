import React, { useRef, useContext, createContext } from "react";
import "./tab-languaje.scss";
import { Context } from "../../App";
interface IpropsTabLanguajes {
  filter: string;
  children?: JSX.Element;
}

export const CRef = createContext({});

const TabLanguajes = (props: IpropsTabLanguajes) => {
  const { filter, children } = props;
  const Contexts = useContext(Context);
  const inputEl = useRef();

  //console.log(props);
  return (
    <>
      {children ? (
        <div className="tab-languaje  ">
          <div className="tab-languaje--wraper-text no-cursor no-hover ">
            <h1 ref={inputEl} className="h2">
              {filter}
            </h1>
          </div>
          <CRef.Provider value={inputEl}>{children}</CRef.Provider>
        </div>
      ) : (
        <div
          className="tab-languaje pointer"
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

          <CRef.Provider value={inputEl}>{children}</CRef.Provider>
        </div>
      )}
    </>
  );
};

export default TabLanguajes;
