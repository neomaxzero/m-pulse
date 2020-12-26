import React from "react";
import ReactDOM from "react-dom";
import Amplify, { Auth } from "aws-amplify";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from "./App";
import awsconfig from "./aws-exports";
import Login from "./pages/login";
import SignUp from "./pages/signup";

console.log(awsconfig);
Amplify.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
