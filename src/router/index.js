import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../pages/Dashboard";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}
