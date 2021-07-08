import React, { useContext, useEffect } from "react";
import { AppContext } from "./App.jsx";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";

const Threads = (props) => {
  const { database, subjectThreads, setSubjectThreads, currentSubject } = useContext(AppContext)

  useEffect(() => {
    console.log('dummydata', database)
    setSubjectThreads(database.Threads[currentSubject])
  })
  // let threadList = ['Engineering is great', 'Engineering is is bunk', 'Engineering is whatever'];
  let threadElements = [];
  subjectThreads.forEach((ele,index)=>{
    threadElements.push(
      <NavLink to={`comments`} className="link" exact>
        <p>{`${ele}`}</p>
      </NavLink>
    )
  })
  
  
  return(
    <div id='threads'>
      <div>Threads Page</div>
      {threadElements}
    </div>
  )
}

export default Threads;