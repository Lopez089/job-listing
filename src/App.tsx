import React, { useEffect, useState, createContext } from "react";
import Header from "./components/header/header";
import ContainerShowJob from "./components/containerShowJob/containerShowJob";
import Card from "./components/card/card";
import CardContainerJob from "./components/cardContainerJob/cardContainerJob";
import ContainerFilter from "./components/containerFilter/containerFilter";
import Wrapper from "./components/warpper/wrapper";
import "./app.scss";
import { Ijob } from "./components/cardContainerJob/cardContainerJob";

export const Context = createContext({});
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
  const [filters, setFilter] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/jobs")
      .then((res) => res.json())
      .then((jobs) => {
        const tabs = (jobs: Ijob) => {
          let arrayTab = [jobs.role, jobs.level, jobs.languages, jobs.tools];

          return arrayTab.flat();
        };

        jobs.forEach((job: Ijob) => {
          let jobsfilter = [];
          let jobfilter: Ijob;
          const tabsArray = tabs(job);
          //console.log(tabs(tabsArray: string[]));
          filters.forEach((filter: string) => {
            tabsArray.forEach((tab: string) => {
              return tab === filter ? (jobfilter = job) : undefined;
            });
          });
          jobsfilter.push();

          setJobs(jobs);
          console.log(jobsfilter);
        });
      });
  }, [filters]);

  return (
    <>
      <Context.Provider value={{ setFilter, filters }}>
        <Header>
          {filters.length > 0 ? (
            <Card>
              <Wrapper>
                <ContainerFilter filters={filters} />
              </Wrapper>
            </Card>
          ) : null}
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
      </Context.Provider>
    </>
  );
}

export default App;
