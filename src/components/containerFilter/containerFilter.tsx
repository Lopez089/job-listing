import React, { useContext } from "react";
import TapLanguajes from "../tab/tabLanguajes";
import TabRemover from "../TabRemover/tabRemover";
import "./containerFilter.scss";
import { Context } from "../../App";
interface Iprops {
  filters: string[];
}

const ContainerFilter = (props: Iprops) => {
  const { filters } = props;
  const context = useContext(Context);
  return (
    <div className="wrap-filter">
      <div className="wrap-filter_taps">
        {filters.map((filter: string, i: number) => {
          return filter === "" ? null : (
            <TapLanguajes key={i} filter={filter}>
              <TabRemover />
            </TapLanguajes>
          );
        })}
      </div>
      <div className="wrap-filter_wrap-clear">
        <p
          className="wrap-filter_wrap-clear_text"
          onClick={() => context.setFilter([])}
        >
          Clear
        </p>
      </div>
    </div>
  );
};

export default ContainerFilter;
