import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "../Header";
import Home from "../Home";
import Projects from "../Projects";
import Contact from "../Contact";
import About from "../About";

function App() {
  return (
    <div className="app">
      <div className="app__bg app__bg-left"></div>
      <div className="app__bg app__bg-right"></div>

      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />>
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
