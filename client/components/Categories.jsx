import React, { useContext } from "react";
import { AppContext } from "./App.jsx";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";

const Categories = () => {
  const categoriesArray = ['Engineering', 'Squirtle', 'Misc']
  const categoryElements = [];
  const { setCurrentSubject } = useContext(AppContext)
  // const handleClick = (e) => {
  //   console.log('click endpoint', e)
  //   // fetch(`/api/${endpoint}`)
  //   //   .then(res => res.json())
  //   //   .then(data => {
  //   //     console.log(data)
  //   //     // manipulate data as needed
  //   //   })
  // }

  categoriesArray.forEach(category => {
    let endpoint = category.toLowerCase();
    categoryElements.push(
      <NavLink to={`/main/${endpoint}`} className="link" onClick={()=> setCurrentSubject(endpoint) }>
        <p>{`${category}`} thread</p>
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