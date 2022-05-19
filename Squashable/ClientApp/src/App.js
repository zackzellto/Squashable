import React from "react";
import { Route } from "react-router";
import { Container } from "react-bootstrap";
import { Home } from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavMenu from "./components/NavMenu";

const App = () => {
  return (
    <Container className="app-container">
      <BrowserRouter>
        <NavMenu />
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </Container>
  );
};

export default App;
