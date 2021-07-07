import React from "react";
import {NavLink} from "react-router-dom";
import Navbar from "../components/Navbar.jsx"


const MainContainer = () => {

   return (
     <div>
      <h1>Main Container</h1>
      <div id="main-container"> 
        <Navbar/>
        <div>
           {/* <SubContainer/> */}
        </div>
      </div>
    </div>
   )
 }




export default MainContainer;