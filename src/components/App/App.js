import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { useAuth0 } from "../../Login/react-auth0-spa";
import "./App.scss";
import Header from "../Header";
import Home from "../Home";
import Projects from "../Projects";
import Contact from "../Contact";
import HowTo from "../HowTo";
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
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/React_Portfolio" exact component={Home} />
          <Route path="/React_Portfolio/projects" component={Projects} />>
          <Route path="/React_Portfolio/contact" component={Contact} />
          <Route path="/React_Portfolio/how-to" component={HowTo} />
          <PrivateRoute path="/React_Portfolio/profile" component={Profile} />
          <Route path="/React_Portfolio/" render={() => <div>404</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
