import "./App.css";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from './Components/Home'
import Registration from "./Components/Registration";
import Addmed from "./Components/Addmed";
import Name from "./Components/Name"
import Alert from "./Components/Alert";

function App() {

  

    const [alert,setalert]=useState(null)

  const showAlert= (message,type)=>{
    setalert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setalert(null)
  },1500);
  }

  const [cart,setcart]=useState([])
 

    const handlecart=(data)=>{
      showAlert("Data Added To Cart","success")
      console.log(data)
        setcart([...cart,{...data,quantity : 1}])
    }   

  return (
    <>
      <Alert alert={alert}/>
    <Name/>
      <Routes>
      <Route path="/" element={<Registration/>}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Home" element={<Home cart={cart} handlecart={handlecart} category={""}/>}/>
      <Route path="/Health" element={<Home cart={cart} handlecart={handlecart} category={"health"}/>}/>
      <Route path="/Personalcare" element={<Home cart={cart} handlecart={handlecart} category={"personalcare"}/>}/>
      <Route path="/Babycare" element={<Home cart={cart} handlecart={handlecart} category={"babycare"}/>}/>
      <Route path="/Womencare" element={<Home cart={cart} handlecart={handlecart} category={"womencare"}/>}/>
      <Route path="/Ayurveda" element={<Home cart={cart} handlecart={handlecart} category={"ayurveda"}/>}/>
      {/* <Route path="/order" element={<Order cart={cart}/>}/> */}
      <Route path="/Addmed" element={<Addmed/>}/>
    </Routes>
    </>
  );
}

export default App;
