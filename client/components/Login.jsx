import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  // submits username and password as object {username:<user>,password:<pass>} to /user as POST
  // if valid, then directs you to the /categories div, which is the main container
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === 'Logged in user') history.push('/categories')
        else history.push('/')
      })
  }

  // updates username and password
  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return(
    <div>Login Page
        <form onSubmit={handleSubmit}>
          <TextField placeholder="Username" onChange={handleUsernameChange}/>
          <TextField placeholder="Password" onChange={handlePasswordChange}/>
          <Button type="submit">Log In</Button>
        </form>
        <Link to="/signup">
        <button>Signup</button>
        </Link>
    </div>
  )
}

export default Login;