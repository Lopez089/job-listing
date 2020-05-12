import React from "react";
import TapLanguajes from "../tab/tabLanguajes";
import TabRemover from "../TabRemover/tabRemover";
import "./containerFilter.scss";

const ContainerFilter = () => {
  return (
    <div className="wrap-filter">
      <div className="wrap-filter_taps">
        <TapLanguajes>
          <TabRemover />
        </TapLanguajes>
        <TapLanguajes>
          <TabRemover />
        </TapLanguajes>
        <TapLanguajes>
          <TabRemover />
        </TapLanguajes>
      </div>
      <div className="wrap-filter_wrap-clear">
        <p className="wrap-filter_wrap-clear_text">Clear</p>
      </div>
    </div>
  );
};

export default ContainerFilter;
