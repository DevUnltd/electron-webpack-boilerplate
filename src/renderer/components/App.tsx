import * as React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import classnames from "classnames";
import Header from "./Header";
import Home from "./Home";
import About from "./About";

import "../styles/App.css";

const App = () => {
  return (
    <div className={classnames("app-content")}>
      <div className="app-background" />
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/" children={Home} />
          <Route exact path="/about" children={About} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
