import React from "react";
import "./cardjob.scss";

import "../tab/tab-info.scss";
import "../tab/tab-languaje.scss";

const TabInfo = () => {
  return (
    <div className="tab-info-featured">
      <h1 className="h2__tab-info">FEATURED</h1>
    </div>
  );
};

const TabLanguajes = () => {
  return (
    <div className="tab-languaje">
      <h1 className="h2">Frontend</h1>
    </div>
  );
};

const CardJob = () => {
  return (
    <article className="card-job featured">
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
    </article>
  );
};
export default CardJob;
