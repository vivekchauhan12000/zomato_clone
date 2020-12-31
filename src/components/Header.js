import React from 'react'
import Login from "../components/Loginbutton"
import Logout from "../components/LogoutButton"
//import Cart from "../components/Cart"
import {Link} from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <div className="topnav">
    <a className="active" href="/"><button className="btn btn-light" style={{borderRadius:"80px",color:"red",borderColor:"red"}}>e!</button></a>
   <Login/>
   <Logout/>

   
  
  </div>
  
    </div>
  )
}

export default Header
