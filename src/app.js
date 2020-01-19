import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './style/global';
import Layout from "./components/Layout/index.jsx"
import Home from "./pages/home.jsx"
import Booked from "./pages/Booked.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <GlobalStyles />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/booked" component={Booked} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;