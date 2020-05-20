import React from "react";
import TabInfo from "../tab/tabinfo";
import TabLanguajes from "../tab/tabLanguajes";
import "./cardContainerjob.scss";
import { Itab } from "../../typescript/interface/Itab";
import Tabjob from "../../service/tab/TabJob";
import { Ijob } from "../../typescript/interface/Ijob";
const CardContainerJob = (props: Ijob) => {
  const {
    logo,
    company,
    position,
    postedAt,
    contract,
    location,
    languages,
    level,
    role,
    tools,
    featured,
  } = props;
  //   const tabs = (tabs: Itab) => {
  //     let arrayTab = [tabs.role, tabs.level, tabs.languages, tabs.tools];

  //     return arrayTab.flat();
  //   };
  const tabs = new Tabjob();
  const arrayTab = tabs.ReturnTabJob(props);

  return (
    <div
      className={`wrapper-card ${
        props.new || featured ? "featured" : undefined
      }`}
    >
      <div className="card-container">
        <div className="card-container_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="card-container_body">
          <div className="card-container_body_info">
            <div className="row-card">
              <h1 className="h2">{company}</h1>
              <div className="wrap-tap">
                {props.new ? <TabInfo text="NEW" /> : null}
                {featured ? <TabInfo text="FEATURED" /> : null}
              </div>
            </div>
            <div className="row-card">
              <h1 className="h1">{position}</h1>
            </div>
            <div className="row-card">
              <p className="info">
                {postedAt} &#8226; {contract} &#8226; {location}
              </p>
            </div>

            <hr />
          </div>
          <div className="card-container_tab-languajes  ">
            <div className="row-card">
              {arrayTab.map((tab, i: number) => (
                <TabLanguajes filter={tab} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardContainerJob;
