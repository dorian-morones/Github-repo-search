import React from "react";
import Results from "./components/Results/index.js"
import Filters from "./components/Filters/index.js"
import "../sass/main.scss"

const App = () => {
  return (
      <div className="container-fluid">
        <Filters />
        <Results />
      </div>
  );
};

export default App;