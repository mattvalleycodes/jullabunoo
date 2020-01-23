import React from "react";
import { Router } from "@reach/router";
import * as ReactDOM from "react-dom";
import AirportsScreen from "./screens/airports";
import AirportScreen from "./screens/airport";

const App = () => (
  <Router>
    <AirportScreen path="/airport/:id" />
    <AirportsScreen path="/" />
  </Router>
);

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
