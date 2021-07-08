import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import MainContainer from "../container/MainContainer.jsx";

export const AppContext = React.createContext();

const App = () => {
  const [currentSubject, setCurrentSubject] = useState('');
  const [categories, setCategories] = useState([]);
  const [subjectThreads, setSubjectThreads] = useState([]);
  const [threadComments, setThreadComments] = useState([]);
  const [database, setDatabase] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [threadId, setThreadId] = useState('')
  const value = {
    currentSubject,
    setCurrentSubject,
    categories,
    setCategories,
    subjectThreads,
    setSubjectThreads,
    threadComments,
    setThreadComments,
    database,
    setDatabase,
    commentList,
    setCommentList,
    threadId, 
    setThreadId,
  }

  return (
    <div>
      <AppContext.Provider value={value}>
      <Switch>
        <Route exact path='/'>
          <Login/>
        </Route>
        <Route path='/signup'>
          <SignUp/>
        </Route>
        <Route component={MainContainer} path='/'/>
      </Switch>
      </AppContext.Provider>
    </div>
  );
};

export default App;
