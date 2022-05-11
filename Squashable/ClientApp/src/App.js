import React from "react";
import { Route } from "react-router";
import { Container } from "react-bootstrap";
import { Home } from "./components/Home";
import NavMenu from "./components/NavMenu";
import { BugForm } from "./components/BugForm";
import "./App.css";

const App = () => {
  return (
    <Container className="app-container">
      <NavMenu />
      <Route exact path="/" component={Home} />
      <Route path="/bug-form" component={BugForm} />
    </Container>
  );
};

export default App;
