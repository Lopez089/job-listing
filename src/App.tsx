import React, { useEffect, useState } from "react";
import Header from "./components/header/header";
import ContainerShowJob from "./components/containerShowJob/containerShowJob";
import Card from "./components/card/card";
import CardContainerJob from "./components/cardContainerJob/cardContainerJob";
import ContainerFilter from "./components/containerFilter/containerFilter";
import Wrapper from "./components/warpper/wrapper";
import "./app.scss";

export interface Ijobs {
  [index: number]: {
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
  };
}

function App() {
  const [jobs, setJobs] = useState<Ijobs>();
  const [filters, setFilter] = useState<string[]>([
    "HTML",
    "CSS",
    "JavaScript",
  ]);

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
        {!jobs ? (
          <p className="h2">No existen datos</p>
        ) : (
          jobs.map((job: Ijobs, i: number) => (
            <Card key={i}>
              <CardContainerJob {...job} />
            </Card>
          ))
        )}
      </ContainerShowJob>
    </>
  );
}

export default App;
