import React, { useContext } from "react";
import { AppContext } from "./App.jsx";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";

const Categories = () => {
  const categoriesArray = ['Engineering', 'Squirtle', 'Misc']
  const categoryElements = [];
  const { setCurrentSubject, database, setSubjectThreads } = useContext(AppContext)
  // const handleClick = (e) => {
  //   console.log('click endpoint', e)
  //   // fetch(`/api/${endpoint}`)
  //   //   .then(res => res.json())
  //   //   .then(data => {
  //   //     console.log(data)
  //   //     // manipulate data as needed
  //   //   })
  // }

  database.forEach(category => {
    const { _id, title, threads }= category
    categoryElements.push(
      <NavLink to={`/${_id}`} className="link" onClick={()=> {
        setSubjectThreads(threads)
        setCurrentSubject(title)
        } }>
        <p>{`${title}`} thread</p>
      </NavLink>
    )
  })
  return(
    <div>
      {categoryElements}
    </div>
  )
}

export default Categories;