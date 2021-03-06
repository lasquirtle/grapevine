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
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password})
    })
    .then((res) => res.json())
    .then((data) => {
      if (data === 'Logged in user') history.push('/main')
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
    <div id="login">
      <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <TextField placeholder="Username" onChange={handleUsernameChange}/>
          <br></br>
          <TextField placeholder="Password" type="password" onChange={handlePasswordChange}/>
          <br></br>
          <Button type="submit">Log In</Button>
        </form>
        <p>Don't have an account?</p><Link to="/signup">Sign up!</Link>
    </div>
  )
}

export default Login;