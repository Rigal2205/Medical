import React, { useState } from "react";
import './CSS/Order.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Order(props){
    const [add,setAdd]=useState({
        fname:'',
        lname:'',
        city:'',
        pin:'',
        address:'',
        email:''
    
})

    let name,value
    const handleOnchange=(e)=>{
    name=e.target.name
    value=e.target.value
    
    setAdd({...add,[name]:value})
    }

    const handleplaceorder=async(e)=>{
        e.preventDefault()
        
            axios.post('http://localhost:3002/Address',add)
            .then(res=>console.log(res))
            setAdd({
                fname:'',
                lname:'',
                city:'',
                pin:'',
                address:'',
                email:''
            
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setAdd(data.data);
        })    

    }

    let count=props.cart.length
    const navigate=useNavigate()

    const handleback=()=>{
            navigate('/Home')
    }

    

    return(
        <>
        <div className="row justify-content-center">
        <div class="col-md-3 mb-4 mx-3 position-static">
            
                    <div class="card mb-4">
          <div class="card-header py-3">
            <h5 class="mb-0 text-font">{count} item <span class="float-end mt-1"
                style={{fontSize: "13px"}}>Edit</span></h5>
          </div>
          <div class="card-body">
          {props.cart.map((element)=>{
                return(
            <div class="row">
              <div class="col-md-4">
                <img src={element.urlToImage}
                  class="rounded-3" style={{width: "100px"}} alt="Blue Jeans Jacket" />
              </div>
              <div class="col-md-6 ms-3">
                <span class="mb-0 text-price">Rs. {element.price}/-</span>
                <p class="mb-0 text-descriptions">{element.name}</p>
                <p class="text-descriptions mt-0">Qty:<span class="text-descriptions fw-bold">{element.quantity}</span>
                </p>
              </div>
            </div>
            )
            })}
            
            <div class="card-footer mt-4">
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-muted">
                  Subtotal
                  <span>{
                props.cart.map(element=>element.price * element.quantity).reduce((total,value)=> total + value, 0)
            }</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center px-0 fw-bold text-uppercase">
                  Total to pay
                  <span>{
                props.cart.map(element=>element.price * element.quantity).reduce((total,value)=> total + value, 0)
            }</span>
                </li>
              </ul>
            </div>


          </div>
        </div>
                
        
      </div>


            <div className="row mt-3 mx-3" style={{marginTop:"25px",backgroundColor:"blue",padding:"20px"}}>
  <div className="col-md-3">
    <div style={{marginTop: "50px", marginLeft: "10px"}} className="text-center">
      <i id="animationDemo" data-mdb-animation="slide-right" data-mdb-toggle="animation"
        data-mdb-animation-reset="true" data-mdb-animation-start="onScroll"
        data-mdb-animation-on-scroll="repeat" className="fas fa-3x fa-shipping-fast text-white"></i>
      <h3 className="mt-3 text-white">Welcome</h3>
      <p className="white-text">You are 30 seconds away from compleating your order!</p>
    </div>
    <div className="text-center">
      {/* <button type="submit" className="btn btn-white btn-rounded back-button">Go back</button> */}
      <button type="button" className="btn btn-light btn-rounded"onClick={handleback}>Go Back</button>
    </div>


  </div>
  <div className="col-md-9 justify-content-center">
    <div className="card card-custom pb-4">
      <div className="card-body mt-0 mx-5">
        <div className="text-center mb-3 pb-2 mt-3">
          <h4 style={{color: "#495057"}}>Delivery Details</h4>
        </div>

        <form className="mb-0">

          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input type="text" id="fname" className="form-control input-custom" />
                <label className="form-label" for="firstname" name="fname" value={add.fname} onChange={handleOnchange}>First name</label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input type="text" id="lname" className="form-control input-custom" />
                <label className="form-label" for="lname" name="lname" value={add.lname} onChange={handleOnchange}>Last name</label>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input type="text" id="city" className="form-control input-custom" />
                <label className="form-label" for="city" name="city" value={add.city} onChange={handleOnchange}>City</label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input type="number" id="pin" className="form-control input-custom" />
                <label className="form-label" for="pin" name="pin" value={add.pin} onChange={handleOnchange}>Pin code</label>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input type="text" id="address" className="form-control input-custom" />
                <label className="form-label" for="address" name="address" value={add.address} onChange={handleOnchange}>Address</label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input type="email" id="email" className="form-control input-custom" />
                <label className="form-label" for="email" name="email" value={add.email} onChange={handleOnchange}>Email</label>
              </div>
            </div>
          </div>

          <div className="float-end ">
            <button type="submit" className="btn btn-primary btn-rounded"
              style={{backgroundColor: "#0062CC"}} onClick={handleplaceorder}>Place order</button>
          </div>

        </form>
      </div>
    </div>
  </div>

</div>
</div>
</>
    )
}

export default Order;