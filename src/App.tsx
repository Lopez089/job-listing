import React, { useEffect, useState } from "react";
import Header from "./components/header/header";
import ContainerShowJob from "./components/containerShowJob/containerShowJob";
import Card from "./components/card/card";
import CardContainerJob from "./components/cardContainerJob/cardContainerJob";
import ContainerFilter from "./components/containerFilter/containerFilter";
import Wrapper from "./components/warpper/wrapper";

import "./app.scss";

function App() {
  const [job, setJob] = useState();
  const [filter, setFilter] = useState(["HTML", "CSS", "JavaScript"]);

  useEffect(() => {
    fetch("http://localhost:3001/jobs")
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  return (
    <>
      <Header>
        <Card>
          <Wrapper>
            <ContainerFilter />
          </Wrapper>
        </Card>
      </Header>
      <ContainerShowJob>
        <Card>
          <CardContainerJob />
        </Card>
        <Card>
          <CardContainerJob />
        </Card>
        <Card>
          <CardContainerJob />
        </Card>
      </ContainerShowJob>
    </>
  );
}

export default App;
