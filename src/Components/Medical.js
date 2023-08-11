import './CSS/Medical.css';
import Medicaldata from './Medicaldata';
import img1 from './Image/home1.png'
import Cartitem from './Cartitem';
import { useState,useEffect } from 'react';
// import axios from 'axios';
// import {data} from './data.js'
import axios from 'axios';

function Medical(props) {

    const [data, setdata]=useState([]);
    

    useEffect(()=>{
        axios
        .get(`http://localhost:3002/api/data`)
        .then((response)=>{
            setdata(response.data);
        })
    }, [] );

  //   useEffect(()=>{
  //     axios
  //     .get(`http://localhost:3002/Resaddmed`)
  //     .then((response)=>{
  //         setdata(...data,...response.data);
  //     })
  // }, [] );

    

    let {cart,handlecart,category}=props
  return (
    <>
      <div className='box1'>
      <img className="im1" data-aos="zoom-in-down" src={img1} alt='...'/>
      <img className="im2" data-aos="zoom-in-down" src={img1} alt='...'/>
      </div>
      <h1 className='title'data-aos="zoom-in-down">Buy Medicines and Essentials</h1>
        <div className='item'>
        <div className='container my-5'>
          <div className='row'>
          {
            props.showCart ? <Cartitem cart={cart}/> : 
            <Medicaldata product={data} category={category} handlecart={handlecart} search={props.search}/>
          } 
          </div>
      </div>
        </div>
    </>
  );
}

export default Medical;
