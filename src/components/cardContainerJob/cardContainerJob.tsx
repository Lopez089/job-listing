import React from "react";
import TabInfo from "../tab/tabinfo";
import TabLanguajes from "../tab/tabLanguajes";
import "./cardContainerjob.scss";
import logo from "./shortly.svg";

const CardContainerJob = () => {
  return (
    <div className="wrapper-card">
      <div className="card-container">
        <div className="card-container_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="card-container_body">
          <div className="card-container_body_info">
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

            <hr />
          </div>
          <div className="card-container_tab-languajes  ">
            <div className="row-card">
              {/* <TabLanguajes /> <TabLanguajes /> <TabLanguajes /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardContainerJob;
