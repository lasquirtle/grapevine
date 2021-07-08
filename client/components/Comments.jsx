import React, { useContext } from "react";
import { AppContext } from "./App.jsx";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Comments = () => {
  const { commentList } = useContext(AppContext);
  const comments = [];
  commentList.forEach(comment => {
    const { text, createdAt } = comment
    comments.push(
      <p>{text} | {createdAt}</p>
    )
  })
  return(
    <div>{comments}</div>
  )
}

export default Comments;