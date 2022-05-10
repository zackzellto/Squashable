import React from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";

import { BugForm } from "./components/BugForm";
import "./custom.css";
const App = () => {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/bug-form" component={BugForm} />
    </Layout>
  );
};

export default App;
