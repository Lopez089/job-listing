import React from "react";
import TabInfo from "../tab/tabinfo";
import TabLanguajes from "../tab/tabLanguajes";
import "./cardContainerjob.scss";

const CardContainerJob = () => {
  return (
    <div className="card--containerJob">
      <div className="logo"></div>
      <div className="wrapper-card">
        <div className="row-card">
          <h1 className="h2">Photosnap</h1>
          <TabInfo />
        </div>
        <div className="row-card">
          <h1 className="h1">Senior Frontend Developer</h1>
        </div>
        <div className="row-card">
          <p className="info">1d ago &#8226; Full Time &#8226; USA only</p>
        </div>
        <div className="row-card">
          <hr />
        </div>
        <div className="row-card">
          <TabLanguajes /> <TabLanguajes /> <TabLanguajes />
        </div>
      </div>
    </div>
  );
};
export default CardContainerJob;
