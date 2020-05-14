import React from "react";
import TabInfo from "../tab/tabinfo";
import TabLanguajes from "../tab/tabLanguajes";
import "./cardContainerjob.scss";

export interface Ijob {
  company: string;
  contract: string;
  featured: boolean;
  id: number;
  languages: string[];
  level: string;
  location: string;
  logo: string;
  new: boolean;
  position: string;
  postedAt: string;
  role: string;
  tools: string[];
}

interface Itab {
  languages: string[];
  level: string;
  role: string;
  tools: string[];
}

const CardContainerJob = (props: any) => {
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
  console.log(props);
  const tabs = (tabs: Itab) => {
    let arrayTab = [tabs.role, tabs.level, tabs.languages, tabs.tools];

    return arrayTab.flat();
  };

  const arrayTab = tabs({
    role,
    level,
    languages,
    tools,
  });

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
              {props.new ? <TabInfo text="NEW" /> : null}
              {featured ? <TabInfo text="FEATURED" /> : null}
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
              {arrayTab.map((tab) =>
                tab ? <TabLanguajes filter={tab} /> : null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardContainerJob;
