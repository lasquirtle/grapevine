import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Comments from "../components/Comments.jsx";
import Threads from "../components/Threads.jsx";

const SubContainer = () => {
  
  return (
    <div>
      <div>Subcontainer container</div>
      <Switch>
          <Route path={["/main/engineering","/main/squirtle","/main/misc"]}>
            <Threads/>
          </Route>
          <Route component={Comments} path="/comments"/>
      </Switch>
    </div>
  );
};

 export default SubContainer