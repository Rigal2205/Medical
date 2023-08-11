import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import './CSS/Navbar.css';
// import dp from './Image/dp-1.jpg'

import Profile from "./Profile";

function Navbar(props){



    return(
        <>
        {/* <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark"> */}
        <div className="box2 fixed-top" id="box2">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          {/* <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark"> */}
  <div className="container-fluid ">
    <Link to="/Home">

  <i className="fa-solid fa-house mx-2" onClick={()=>props.handlehome()}></i>
    </Link>
    {/* <Link className="navbar-brand" to="/">Home</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Ayurveda">Ayurveda</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Personalcare">Personalcare</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Babycare">Babycare</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Womencare">Womencare</Link>
        </li>
        
        
      </ul>
      <div className="mx-2 my-2">
      <i className="fa-solid fa-user" style={{color: "#235ab8", fontSize:"22px"}} onClick={()=>props.handleshowp()}></i>
      {/* <button type="button" className="btn btn-outline-primary" onClick={handleout}>Log Out</button> */}
      </div>
  <div className="cart" onClick={()=>props.handleshow(true)}>
  <i class="fa-solid fa-cart-shopping" style={{color: "#235ab8"}}><sup>{props.count}</sup></i>
            
        </div>
    </div>
  </div>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>props.setSearch(e.target.value)}/>
        <i className="fa-solid fa-magnifying-glass mx-2 mt-1" style={{color:"#407ee7",fontSize:"27px"}} onClick={handlesearch}></i>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      {/* </form> */} 
            {
              props.showprofile?<Profile/>:""
            }
</nav>
{/* </nav> */}
        </div>
        </>
    )
}

export default Navbar;