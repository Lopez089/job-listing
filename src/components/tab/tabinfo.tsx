import React from "react";
import "./tab-info.scss";

const TabInfo = (props: { text: string }) => {
  const { text } = props;
  return (
    <>
      {text === "NEW" ? (
        <div className="tab-info-new">
          <h1 className="h2__tab-info">{text}</h1>
        </div>
      ) : text === "FEATURED" ? (
        <div className="tab-info-featured">
          <h1 className="h2__tab-info">{text}</h1>
        </div>
      ) : null}
    </>
  );
};

export default TabInfo;
