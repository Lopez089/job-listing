import React from "react";
import Header from "./components/header/header";
import ContainerShowJob from "./components/containerShowJob/containerShowJob";
import CardJob from "./components/cardJob/cardJob";
import "./app.scss";

function App() {
  return (
    <>
      <div className="wrap">
        <CardJob />
      </div>
      <Header />
      <ContainerShowJob />
    </>
  );
}

export default App;
