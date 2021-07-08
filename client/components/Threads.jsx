import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./App.jsx";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import { TextField, Button, Fab } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

const Threads = (props) => {
  const { database, subjectThreads, setSubjectThreads, currentSubject, setCommentList, setThreadId } = useContext(AppContext)
  const [newThreadTitle, setNewThreadTitle] = useState('')
  const [newThreadBody, setNewThreadBody] = useState('')

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
    threadElements.push(
      <NavLink to="/comments" className="link" exact onClick={()=> {
        setCommentList(comments);
        setThreadId(_id)
      }}>
        <p className='threadTitle'> {thread_title} </p>
      </NavLink>
    )
  });
  
  const handleThreadTitle = (e) => {
    setNewThreadTitle(e.target.value)
  }
  const handleThreadBody = (e) => {
    setNewThreadBody(e.target.value)
  }

  const handleCreateNewThread = () => {
    const data = {
      user: '', // Insert some logic to get user from the browser cookies
      thread_title: newThreadTitle,
      body: newThreadBody
    }
    fetch('/api/createThread', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
  
  return(
    <div id='threads'>
      <div>Threads Page</div>
      {threadElements}
      {/* <Fab> 
        <AddIcon/>
      </Fab> */}
        <form onSubmit={handleCreateNewThread}> 
          <TextField placeholder="Create new thread" onChange={handleThreadTitle}/>
          <TextField placeholder="About" onChange={handleThreadBody} />
          <Button type="submit">Create</Button>
        </form>
    </div>
  )
}

export default Threads;