import React, { useEffect, useState } from "react";
import Header from "./components/header/header";
import ContainerShowJob from "./components/containerShowJob/containerShowJob";
import Card from "./components/card/card";
import CardContainerJob from "./components/cardContainerJob/cardContainerJob";
import ContainerFilter from "./components/containerFilter/containerFilter";
import Wrapper from "./components/warpper/wrapper";

import "./app.scss";

function App() {
  const [jobs, setJobs] = useState<any>();
  const [filters, setFilter] = useState<string[]>([
    "HTML",
    "CSS",
    "JavaScript",
  ]);
  console.log(jobs);
  useEffect(() => {
    fetch("http://localhost:3001/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <>
      <Header>
        <Card>
          <Wrapper>
            <ContainerFilter filters={filters} />
          </Wrapper>
        </Card>
      </Header>
      <ContainerShowJob>
        {jobs.map((job: any) => (
          <Card>
            <CardContainerJob />
          </Card>
        ))}

        {/* 
        <Card>
          <CardContainerJob />
        </Card>
        <Card>
          <CardContainerJob />
        </Card> */}
      </ContainerShowJob>
    </>
  );
}

export default App;
