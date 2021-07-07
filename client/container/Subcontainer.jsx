import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Comments from "../components/Comments.jsx";
import Threads from "../components/Threads.jsx";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          Welcome INSERT USER FIRST AND LAST NAME
        </Route>
        <Route path='/threads'>
          <Threads/>
        </Route>
        <Route path='/comments'>
          <Comments/>
        </Route>
      </Switch>
    </div>
  );
};

 export default SubContainer