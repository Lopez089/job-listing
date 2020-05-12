import React from "react";
import "./containerShowJob.scss";

const ContainerShowJob = (props: any) => {
  return (
    <section className="container-Show-job">
      <div className="wrap">{props.children}</div>
    </section>
  );
};

export default ContainerShowJob;
