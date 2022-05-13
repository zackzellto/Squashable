import React from "react";
import { Route } from "react-router";
import { Container } from "react-bootstrap";
import { Home } from "./components/Home";
import NavMenu from "./components/NavMenu";
import { BugForm } from "./components/BugForm";
import { Dashboard } from "./components/Dashboard";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <Container className="app-container">
      <BrowserRouter>
        <NavMenu />
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/bug-form" component={BugForm} />
      </BrowserRouter>
    </Container>
  );
};

export default App;
