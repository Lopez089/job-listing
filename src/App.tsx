import React from "react";
import Header from "./components/header/header";
import ContainerShowJob from "./components/containerShowJob/containerShowJob";
import Card from "./components/card/card";
import CardContainerJob from "./components/cardContainerJob/cardContainerJob";
import ContainerFilter from "./components/containerFilter/containerFilter";
import Wrapper from "./components/warpper/wrapper";

import "./app.scss";

function App() {
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
