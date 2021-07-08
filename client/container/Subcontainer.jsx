import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { AppContext } from "../components/App.jsx";
import Comments from "../components/Comments.jsx";
import Threads from "../components/Threads.jsx";

const SubContainer = () => {
  const { currentSubject, setCurrentSubject, categories, setCategories, database, setDatabase } = useContext(AppContext)
  let threadIds = []
  database.forEach(category => {
    const id = category._id
    threadIds.push( '/'+id )
  })
  return (
    <div>
      <Switch>
          <Route path={threadIds}>
            <Threads/>
          </Route>
          <Route component={Comments} path="/comments"/>
      </Switch>
    </div>
  );
};

 export default SubContainer