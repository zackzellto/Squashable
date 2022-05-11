import React from "react";
import { Route } from "react-router";
import { Container } from "react-bootstrap";
import { Home } from "./components/Home";
import Navmenu from "./components/NavMenu";
import { BugForm } from "./components/BugForm";
import "./App.css";

const App = () => {
  return (
    <Container className="app-container">
      <Navmenu />
      <Route exact path="/" component={Home} />
      <Route path="/bug-form" component={BugForm} />
    </Container>
  );
};

export default App;
