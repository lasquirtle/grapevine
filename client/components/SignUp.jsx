import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const history = useHistory();

  const handleSubmit = (e) => {
    console.log('From fetch', username, password, firstName, lastName);
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({newUsername: username, newPassword: password, newFirstName: firstName, newLastName: lastName})
    })
    .then(() => history.push('/categories'))
  }

  // updates user info as user types
  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  return(
    <div id="signup">Sign Up
        <form id='Signup' onSubmit={handleSubmit}>
          <TextField placeholder="Username" onChange={handleUsernameChange}/>
          <TextField placeholder="Password" onChange={handlePasswordChange}/>
          <TextField placeholder="First Name" onChange={handleFirstNameChange}/>
          <TextField placeholder="Last Name" onChange={handleLastNameChange}/>
          <Button type="submit">Sign Up</Button>
        </form>
    </div>
  )
}

export default SignUp;