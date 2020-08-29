import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Icons from "./icons";

function App() {
  Icons();

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout Page</h1>
          </Route>

          <Route path="/login">
            <h1>Login Page</h1>
          </Route>

          <Route path="/">
            <Header />
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
