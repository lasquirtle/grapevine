import React, { useContext, useState } from "react";
import { AppContext } from "./App.jsx";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { TextField, Button, Fab } from "@material-ui/core";


const Comments = () => {
  const { commentList, threadId, currentSubject } = useContext(AppContext);

  const comments = [];
  commentList.forEach(comment => {
    const { text, createdAt } = comment
    comments.push(
      <div className="comments">
      <p className="comment-text">{text}</p><p className="date">{createdAt}</p>
      </div>
    )
  })

  const [text, setText] = useState('');

  const handleCommentText = (e) => {
    setText(e.target.value);
  }

  const handleCreateComment = () => {
    const data = {
      _id: threadId,
      text,
      title: currentSubject
    }
    fetch('/api/createComment', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  return(
    <div>
      <div>
        Comments
      </div>
      <div>
      {comments}
      <form onSubmit={handleCreateComment}> 
          <TextField placeholder="Add new comment" onChange={handleCommentText}/>
          <Button type="submit">Add Comment</Button>
      </form>
      </div>
    </div>
  )
}

export default Comments;