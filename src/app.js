import React from "react";
import Results from "./components/Results/index.js"
import Header from "./components/Header/index.js"
import "../sass/main.scss"
import { GlobalStyles } from './style/global';
import Footer from './components/Footer/index.jsx'

const App = () => {
  return (
      <div className="container-fluid">
        <GlobalStyles />
        <Header />
        <Results />
        <Footer />
      </div>
  );
};

export default App;