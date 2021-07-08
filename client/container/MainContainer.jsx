import React, { useEffect, useContext } from "react";
import { AppContext } from "../components/App.jsx";
import {Switch, Route} from "react-router-dom";
import Navbar from "../components/Navbar.jsx"
import Categories from "../components/Categories.jsx"
import SubContainer from "./Subcontainer.jsx"
import Comments from "../components/Comments.jsx";
import Threads from "../components/Threads.jsx";


const MainContainer = () => {
  
  // query database for list of all threads across all objects
  // store it in an object like {engineering:[thread1,thread2], squirtle:[thread1,thread2,etc]}
  let dummydata = {
    Threads:{
      engineering:['Engineering is great', 'Engineering is is bunk', 'Engineering is whatever'],
      squirtle:['Squirtle sucks','Squirtle best starter','Squirtle is okay'],
      misc:['misc thread1','misc thread2','misc thread3','misc thread4']
    },
    Comments:{
      engineering:['Ecomment 1','Ecomment 2','Ecomment 3','Ecomment 4'],
      squirtle:['Scomment 1','Scomment 2','Scomment 3','Scomment 4'],
      misc:['misc comment 1','misc comment 2','misc comment 3','misc comment 4']
    }
  }
  const { currentSubject, setCurrentSubject, setDatabase } = useContext(AppContext)
  useEffect(() => {
    setDatabase(dummydata);
  }, [])
  // setCurrentSubject(window.location.pathname);
  console.log('currentSubject', currentSubject)


  return (
     <div>
      <h1 className='Title'>GrapeVine</h1>
      <div id="main-container"> 
      <Categories/>
        <div>
        <SubContainer/>
        </div>
      </div>
    </div>
   )
 }




export default MainContainer;
