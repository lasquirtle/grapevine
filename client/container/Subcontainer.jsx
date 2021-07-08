import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Comments from "../components/Comments.jsx";
import Threads from "../components/Threads.jsx";

const SubContainer = () => {
  
  return (
    <div>
      <Switch>
          <Route path={["/engineering","/squirtle","/misc"]}>
            <Threads/>
          </Route>
          <Route component={Comments} path="/comments"/>
      </Switch>
    </div>
  );
};

 export default SubContainer