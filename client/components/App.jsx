import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import MainContainer from "../container/MainContainer.jsx";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Login/>
        </Route>
        <Route path='/signup'>
          <SignUp/>
        </Route>
        <Route path='*'>
          <MainContainer/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
