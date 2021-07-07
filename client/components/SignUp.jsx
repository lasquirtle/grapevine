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
    console.log('Placeholder')
  }

  // updates user info as user types
  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleFirstNameChange = (e) => {
    setUsername(e.target.value)
  }
  const handleLastNameChange = (e) => {
    setPassword(e.target.value)
  }

  return(
    <div>Sign Up
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