import Footer from './Footer'
import { useState } from "react";
import Medical from "./Medical";
import Navbar from "./Navbar";

const Home = (props) => {
  let count=props.cart.length

  const [showCart,setShowCart]=useState(false)
  const [showprofile,setShowProfile]=useState(false)

  const handleshow=()=>{
    showCart? setShowCart(false):setShowCart(true)
  }

  const handlehome=()=>{
      setShowCart(false)
  }

  const handleshowp=()=>{
    showprofile? setShowProfile(false):setShowProfile(true)
  } 
  
  return (
    <>
      <Navbar count={count} showprofile={showprofile} handleshow={handleshow} handleshowp={handleshowp} handlehome={handlehome} />
      <Medical showCart={showCart} cart={props.cart} handlecart={props.handlecart} category={props.category}/>
      <Footer/>
    </>
  );
};

export default Home;
