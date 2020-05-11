import React from "react";
import "./containerShowJob.scss";

import CardJob from "../../components/cardJob/cardJob";

const ContainerShowJob = () => {
  return (
    <section className="container-Show-job">
      <div className="wrap">
        <CardJob />
        <CardJob />
        <CardJob />
      </div>
    </section>
  );
};

export default ContainerShowJob;
