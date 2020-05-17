import React, { useEffect, useState, createContext } from "react";
import Header from "./components/header/header";
import ContainerShowJob from "./components/containerShowJob/containerShowJob";
import Card from "./components/card/card";
import CardContainerJob from "./components/cardContainerJob/cardContainerJob";
import ContainerFilter from "./components/containerFilter/containerFilter";
import Wrapper from "./components/warpper/wrapper";
import "./app.scss";
import { Ijob } from "./typescript/interface/Ijob";
import { Ijobs } from "./typescript/interface/Ijobs";
import Fetch from "./service/fech/fetch";

export const Context = createContext({});

function App() {
  const [jobs, setJobs] = useState<Ijobs>();
  const [filters, setFilter] = useState<string[]>([]);
  const fetch = new Fetch(filters);
  useEffect(() => {
    fetch.handleFetch();
  }, [fetch, filters]);

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
            jobs.map((job: Ijob) => (
              <Card key={job.id}>
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
