import React from "react";
import './CSS/Medicaldata.css'
import { useState } from "react";

export default function Medicaldata(props){

    const [search,setSearch]=useState('')
    let {category,product}=props;
    return (
        <>
        <form className="search d-flex my-3 mx-2" role="search">
        <input className="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearch(e.target.value)}/>
      </form>
      <hr/>
        {product.filter((element)=>{
          return search.toLowerCase()===''?element.category.includes(category): element.category.includes(category) && element.name.toLowerCase().includes(search);
          // return(<>
          //   if(search.toLowerCase()===''){
          //     element.category.includes(category)
          //   }
          //   else{
          //     element.name.toLowerCase().includes(search)
          //   }
          //   </>
          // )
         })
         .map(element=>{
          return(
            <div className="col-md-4" data-aos="fade-up">
              
            
            <div className="item1" key={element.id}>
        <div className="row">
          <div className="col-12">
            <img src={element.urlToImage} className="img-fluid d-flex justify-content-center rounded-3" alt="..."/>
          </div>
          <div className="row mt-2">
              <div className="col-4 font-weight-bolder mx-1">
                <h4>{element.name}</h4>
              </div>
              <div className="col mx-5">
              </div>
              <div className="col-9 font-weight-bold mx-1">
                <h5>₹ {element.price}</h5>
              </div>
            <div className="row my-2 ">
          <div className="col-12 font-weigth-bold">{element.description!==0?element.description.slice(0,100):""}</div>
            </div>
          </div>
        </div>
            <button type="button" className="btn btn-dark" onClick={()=>props.handlecart(element)} >Add To Cart</button>
            </div>
            </div>
          )
         })}
        </>
      )
}