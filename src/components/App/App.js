import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { useAuth0 } from "../../Login/react-auth0-spa";
import "./App.scss";
import Header from "../Header";
import Home from "../Home";
import Projects from "../Projects";
import Contact from "../Contact";
import About from "../About";
import Profile from "../Profile";
import PrivateRoute from "../PrivateRoute";
import history from "../../Login/utils/history";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="app">
      <div className="app__bg app__bg-left"></div>
      <div className="app__bg app__bg-right"></div>

      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />>
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
