import React, { useContext, useEffect } from "react";
import { AppContext } from "./App.jsx";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";

const Threads = (props) => {
  const { database, subjectThreads, setSubjectThreads, currentSubject, setCommentList } = useContext(AppContext)

  useEffect(() => {
    console.log('from threads component', database)
    console.log('threads from state', subjectThreads)
    // setSubjectThreads(database.Threads[currentSubject])
  })
  // let threadList = ['Engineering is great', 'Engineering is is bunk', 'Engineering is whatever'];
  let url = window.location.pathname.slice(1)
  console.log(url)


  let threadElements = [];
  subjectThreads.forEach((thread,index)=>{
    const { _id, thread_title, body, comments } = thread
    console.log(_id,thread_title,body)
    threadElements.push(
      <NavLink to="/comments" className="link" exact onClick={()=> {
        setCommentList(comments)
      }}>
        <p className='threadTitle'> {thread_title} </p>
      </NavLink>
    )
  });
  

  
  return(
    <div id='threads'>
      <div>Threads Page</div>
      {threadElements}
    </div>
  )
}

export default Threads;