import React, { useContext, useState } from "react";
import { TextField, Button, Fab } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { AppContext } from "./App.jsx";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";

const Categories = () => {
  const [newCategoryName, setNewCategoryName] = useState('');
  const categoryElements = [];
  const { setCurrentSubject, database, setSubjectThreads } = useContext(AppContext)

  database.forEach(category => {
    const { _id, title, threads }= category
    categoryElements.push(
      <NavLink to={`/${_id}`} className="link" onClick={()=> {
        setSubjectThreads(threads)
        setCurrentSubject(title)
        } }>
        <p>{`${title}`}</p>
      </NavLink>
    )
  })

  const handleCategoryName = (e) => {
    setNewCategoryName(e.target.value)
    console.log(newCategoryName)
  }

  const handleCreateCategory = () => {
    fetch('/api/createCategory', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({title: newCategoryName})
    })
  }

  return(
    <div>
      {categoryElements}
      {/* <Fab> 
        <AddIcon/>
      </Fab> */}
        <form onSubmit={handleCreateCategory}> 
          <TextField placeholder="Add new category" onChange={handleCategoryName}/>
          <Button type="submit">Create</Button>
        </form>
    </div>
  )
}

export default Categories;