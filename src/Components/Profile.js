import React from "react";
import './CSS/Navbar.css'
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useEffect,useState } from "react";
import dpp from './Image/DP.png'
// import { data } from "./data";

function Profile(){
    const navigate=useNavigate()

    const handlelogout=()=>{
      navigate('/Login')
    }

    // const [pdata,setPdata]=useState('');

//     useEffect( ()=>{
//     const fetchdata=async ()=>{
//       const data=await axios.get('http://localhost:3002/Login',pdata)
//       console.log(data)
//       setPdata(...pdata,data)

//     }
//     fetchdata();
// },[])

    // useEffect(async ()=>{
        
    //         const data=await axios.get('http://localhost:3002/product/get',pdata)
    //         console.log(data)
    //         setPdata(...pdata,data)
        
    // },[])



    return(
        <>
        <div className="sub-menu-wrap" id="submenu">
    <div className="sub-menu">
      <div className="user-info">
      <img src={dpp} alt="...."></img>
      <h3 id="mname">Name
      {/* {
        pdata.map(element=>{
          return(
            <p>{element.username}</p>
          )
        })
      } */}
        
      </h3>
      </div>
      <hr/>
      <a href="/" className="sub-menu-link">
        <i class="fa-solid fa-user" style={{color: "#000000"}}></i>
        <p>Edit Profile</p>
        <span>></span>
      </a>
      <a href="/" className="sub-menu-link">
        <i className="fa-solid fa-gear"></i>
        <p>Setting & Privacy</p>
        <span>></span>
      </a>
      <a href="/" className="sub-menu-link">
        <i class="fa-solid fa-circle-info"></i>
        <p>Help and Support</p>
        <span>></span>
      </a>
      <a href="/" className="sub-menu-link">
        <i class="fa-solid fa-right-from-bracket"></i>
        <p onClick={handlelogout}>Log out</p>
        <span>></span>
      </a>
    </div>
  </div>
        </>
    )
}

export default Profile;